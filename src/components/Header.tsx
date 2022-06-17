import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl font-bold'>Welcome to React Router!</h1>
      <nav className='flex gap-4 border-b-2 pb-4'>
        <Link className='rounded-md bg-green-400 px-2 py-1 text-black' to='/'>
          App
        </Link>
        <Link
          className='rounded-md bg-green-400 px-2 py-1 text-black'
          to='/expenses'
        >
          Expenses
        </Link>
        <Link
          className='rounded-md bg-green-400 px-2 py-1 text-black'
          to='/invoices'
        >
          Invoices
        </Link>
      </nav>
    </header>
  );
}
