import { Outlet } from 'react-router-dom';
import { QueryNavLink } from '../components';
import type { IInvoices } from '../types';

interface InvoicesProps {
  invoices: IInvoices;
  paramsValue: string;
  handleParamsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Invoices({
  invoices,
  paramsValue,
  handleParamsChange
}: InvoicesProps) {
  return (
    <main className='flex w-full max-w-xs flex-1 animate-fade flex-col items-center gap-8'>
      <header className='flex flex-col gap-4'>
        <h2 className='border-b pb-2 text-center text-lg font-medium'>
          Welcome to the Invoices!
        </h2>
        <input
          className='rounded-md border-2 border-pink-400 py-1 px-2 transition
                     focus:outline-none focus:ring-2 focus:ring-green-400 
                     focus:ring-offset-2'
          type='text'
          id='search'
          name='search'
          placeholder='Search invoice'
          value={paramsValue}
          onChange={handleParamsChange}
        />
        <nav>
          <ul className='flex flex-col gap-4'>
            {invoices
              .filter(({ name }) =>
                name
                  .toLowerCase()
                  .replace(/\s/g, '')
                  .includes(paramsValue.toLowerCase().replace(/\s/g, ''))
              )
              .map(({ name, number }) => (
                <li key={number}>
                  <QueryNavLink
                    className={({ isActive }) =>
                      `${
                        isActive && 'font-medium text-blue-700'
                      } transition-colors hover:text-blue-400`
                    }
                    to={String(number)}
                  >
                    <span>🗒️</span> {name}
                  </QueryNavLink>
                </li>
              ))}
          </ul>
        </nav>
      </header>
      <Outlet />
    </main>
  );
}
