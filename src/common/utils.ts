import type { IInvoice } from '../types';

export function getInvoice(invoices: IInvoice[], id: number): IInvoice | null {
  return invoices.find(({ number }) => id === number) ?? null;
}

export function deleteInvoice(invoices: IInvoice[], id: number): IInvoice[] {
  return invoices.filter(({ number }) => id !== number);
}
