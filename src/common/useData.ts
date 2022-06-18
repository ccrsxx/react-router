import { useOutletContext } from 'react-router-dom';
import type { IInvoice } from '../types';

export function useData() {
  return useOutletContext<IInvoice[]>();
}
