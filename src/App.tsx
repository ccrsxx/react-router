import { Outlet, Link } from 'react-router-dom';
import { invoices } from './common';
import { Footer, Header } from './components';

export function App() {
  return (
    <div className='flex min-h-screen flex-col items-center gap-6 py-8'>
      <Header />
      <Outlet context={invoices} />
      <Footer />
    </div>
  );
}
