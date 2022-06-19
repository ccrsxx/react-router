import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { invoices as invoicesData, InvoiceContext } from './common';
import { Footer, Header } from './components';
import type { IInvoice } from './types';

export function App() {
  const [invoices, setInvoices] = useState<IInvoice[]>(invoicesData);

  return (
    <div className='flex min-h-screen flex-col items-center gap-6 py-8'>
      <Header />
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <InvoiceContext.Provider value={{ invoices, setInvoices }}>
        <Outlet context={{ invoices, setInvoices }} />
      </InvoiceContext.Provider>
      <Footer />
    </div>
  );
}
