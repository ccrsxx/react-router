import { Link } from 'react-router-dom';
import { useData } from '../common';

export function Invoices() {
  const invoices = useData();

  return (
    <main className='flex flex-1 animate-fade flex-col gap-4'>
      <h2 className='border-b pb-2 text-center text-lg font-medium'>
        Welcome to the Invoices!
      </h2>
      <nav>
        <ul className='flex flex-col gap-2'>
          {invoices.map(({ name, number }) => (
            <li
              className='pb-1 transition-colors hover:text-blue-400'
              key={number}
            >
              <Link to={`/invoices/${number}`}>
                <span>🗒️</span> {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
