import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { EmptyInvoice, EmptyPage } from './components';
import { Invoices, Invoice, Expenses } from './routes';

export function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />}>
            <Route index element={<EmptyInvoice />} />
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
