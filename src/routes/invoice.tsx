import { useParams } from 'react-router-dom';
import { getInvoice } from '../common';

export function Invoice() {
  const { invoiceId } = useParams();
  const { name, amount, due } = getInvoice(parseInt(invoiceId!, 10));

  return (
    <div
      className='flex w-full max-w-[250px] animate-fade-up flex-col
                 gap-2 rounded-md border px-4 py-2 text-lg shadow-md
                 transition hover:-translate-y-2 hover:shadow-lg'
      key={invoiceId}
    >
      <h2 className='text-base font-medium'>Invoice#{invoiceId}</h2>
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
    </div>
  );
}
