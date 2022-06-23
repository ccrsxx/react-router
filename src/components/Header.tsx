import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl font-bold'>Welcome to React Router!</h1>
      <nav className='flex w-full gap-4 border-b-2 pb-4 text-white'>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive &&
              'scale-110 font-bold text-black ring-2 ring-pink-400 ring-offset-2'
            } w-full max-w-xs rounded-md bg-green-400 px-2 py-1 text-center transition`
          }
          to='/'
        >
          App
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive &&
              'scale-110 font-bold text-black ring-2 ring-pink-400 ring-offset-2'
            } w-full max-w-xs rounded-md bg-green-400 px-2 py-1 text-center transition`
          }
          to='expenses'
        >
          Expenses
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive &&
              'scale-110 font-bold text-black ring-2 ring-pink-400 ring-offset-2'
            } w-full max-w-xs rounded-md bg-green-400 px-2 py-1 text-center transition`
          }
          to='invoices'
        >
          Invoices
        </NavLink>
      </nav>
    </header>
  );
}
