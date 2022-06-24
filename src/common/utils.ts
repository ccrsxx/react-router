import type { IInvoices, IInvoice } from '../types';

export function getData(invoices: IInvoices, id: number): IInvoice | null {
  return invoices.find(({ number }) => number === id) ?? null;
}

export function deleteData(invoices: IInvoices, id: number): IInvoices {
  return invoices.filter(({ number }) => number !== id);
}
