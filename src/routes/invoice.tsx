import { useContext } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { InvoiceContext, getInvoice, deleteInvoice } from '../common';
import type { IInvoice } from '../types';

export function Invoice() {
  const { invoices, setInvoices } = useContext(InvoiceContext);
  const { invoiceId } = useParams();
  const { search } = useLocation();

  const navigate = useNavigate();

  const { name, number, amount, due } =
    getInvoice(invoices, parseInt(invoiceId!, 10)) ?? {};

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
              onClick={() => {
                setInvoices((prevInvoice: IInvoice[]) =>
                  deleteInvoice(prevInvoice, number!)
                );
                navigate(`/invoices${search}`);
              }}
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
