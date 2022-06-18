import { invoices } from './data';
import type { IInvoice } from '../types';

export function getInvoice(id: number): IInvoice {
  return invoices.find(({ number }) => id === number)!;
}
