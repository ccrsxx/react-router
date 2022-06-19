import type { IInvoice } from './IInvoice';

export interface IInvoiceContext {
  invoices: IInvoice[];
  setInvoices: any;
}
