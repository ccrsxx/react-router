import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Invoices, Invoice, Expenses, Empty } from './routes';

export function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='expenses' element={<Expenses />} />
          <Route path='invoices' element={<Invoices />}>
            <Route path=':invoiceId' element={<Invoice />} />
          </Route>
          <Route path='*' element={<Empty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
