import { useOutletContext } from 'react-router-dom';

interface Invoice {
  name: string;
  number: number;
  amount: string;
  due: string;
}

export function useData() {
  return useOutletContext<Invoice[]>();
}
