import { useState } from 'react';
import {
  Routes,
  Route,
  useSearchParams,
  useNavigate,
  useLocation
} from 'react-router-dom';
import { invoices as invoicesData, getData, deleteData } from './common';
import { Header, Footer, EmptyInvoice, EmptyPage } from './components';
import { Homepage, Invoices, Invoice, Expenses } from './routes';

export function App() {
  const [count, setCount] = useState(0);
  const [invoices, setInvoices] = useState(invoicesData);
  const [searchParams, setSearchParams] = useSearchParams();

  const [navigate, { search }] = [useNavigate(), useLocation()];

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const handleParamsChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) =>
    value ? setSearchParams({ filter: value }) : setSearchParams({});

  const getInvoice = (id: number) => getData(invoices, id);

  const deleteInvoice = (id: number) => () => {
    setInvoices(deleteData(invoices, id));
    navigate(`/invoices${search}`);
  };

  const paramsValue = searchParams.get('filter') ?? '';

  return (
    <div className='flex min-h-screen flex-col items-center gap-6 py-8'>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route
          path='expenses'
          element={
            <Expenses
              count={count}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          }
        />
        <Route
          path='invoices'
          element={
            <Invoices
              invoices={invoices}
              paramsValue={paramsValue}
              handleParamsChange={handleParamsChange}
            />
          }
        >
          <Route index element={<EmptyInvoice />} />
          <Route
            path=':invoiceId'
            element={
              <Invoice getInvoice={getInvoice} deleteInvoice={deleteInvoice} />
            }
          />
        </Route>
        <Route path='*' element={<EmptyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
