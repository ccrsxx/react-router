import { useContext } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { QueryNavLink } from '../components';
import { InvoiceContext } from '../common';

export function Invoices() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { invoices } = useContext(InvoiceContext);

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
          name='search'
          id='search'
          placeholder='Search invoice'
          value={searchParams.get('filter') ?? ''}
          onChange={({
            target: { value }
          }: React.ChangeEvent<HTMLInputElement>) =>
            value ? setSearchParams({ filter: value }) : setSearchParams({})
          }
        />
        <nav>
          <ul className='flex flex-col gap-4'>
            {invoices
              .filter(({ name }) =>
                name
                  .toLowerCase()
                  .replace(/\s/g, '')
                  .includes(
                    searchParams
                      .get('filter')
                      ?.toLowerCase()
                      .replace(/\s/g, '') ?? ''
                  )
              )
              .map(({ name, number }) => (
                <li key={number}>
                  <QueryNavLink
                    className={({ isActive }) =>
                      `${
                        isActive && 'font-medium text-blue-700'
                      } transition-colors hover:text-blue-400`
                    }
                    to={`/invoices/${number}`}
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
