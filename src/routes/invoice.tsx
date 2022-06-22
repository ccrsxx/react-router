import { useParams } from 'react-router-dom';
import type { IInvoice } from '../types';

interface InvoiceProps {
  getInvoice: (id: number) => IInvoice | null;
  deleteInvoice: (id: number) => () => void;
}

export function Invoice({ getInvoice, deleteInvoice }: InvoiceProps) {
  const { invoiceId } = useParams();

  const { name, number, amount, due } =
    getInvoice(parseInt(invoiceId!, 10)) ?? {};

  return (
    <div
      className='flex w-full max-w-[250px] animate-fade-up flex-col
                 gap-2 rounded-md border px-4 py-2 text-lg shadow-md
                 transition hover:shadow-lg'
      key={invoiceId}
    >
      {name ? (
        <>
          <div className='flex justify-between'>
            <h2 className='text-base font-medium'>Invoice#{invoiceId}</h2>
            <button
              className='rounded-md bg-red-200 px-1 text-base transition 
                         hover:brightness-110 active:scale-90'
              type='button'
              onClick={deleteInvoice(number!)}
            >
              <span>🔫</span>
            </button>
          </div>
          <div>
            <p className='text-sm'>
              Name: <span className='font-medium'>{name}</span>
            </p>
            <p className='text-sm'>
              Amount: <span className='font-medium'>{amount}</span>
            </p>
            <p className='text-sm'>
              Due Date: <span className='font-medium'>{due}</span>
            </p>
          </div>
        </>
      ) : (
        <h2 className='text-base font-medium'>
          <span>⚠️</span> invoice#{invoiceId} not found!
        </h2>
      )}
    </div>
  );
}
