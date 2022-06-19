import { createContext } from 'react';
import type { IInvoiceContext } from '../types';

export const InvoiceContext = createContext({} as IInvoiceContext);
