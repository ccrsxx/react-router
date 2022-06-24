import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { App } from '../App';

describe('test App component', () => {
  beforeEach(() => {
    render(<App />, { wrapper: Router });
  });

  it('matches previous snapshot', () => {
    const container = document.querySelector('body > div > div');
    expect(container).toMatchSnapshot();
  });

  it('can go to multiple routes', () => {
    const homepageButton = screen.getByRole('link', { name: /app/i });
    const expensesButton = screen.getByRole('link', { name: /expenses/i });
    const invoicesButton = screen.getByRole('link', { name: /invoices/i });

    userEvent.click(homepageButton);

    expect(
      screen.getByRole('heading', { name: /welcome to react/i })
    ).toBeInTheDocument();

    userEvent.click(expensesButton);

    expect(screen.getByText(/count/i)).toBeInTheDocument();

    userEvent.click(invoicesButton);

    expect(screen.getByText(/ocean/i)).toBeInTheDocument();
  });

  it('can increment and decrement states on expenses route', () => {
    function getSpanCount() {
      return screen.getByText(
        (content, element) =>
          element?.tagName === 'SPAN' && /^$|\d+/.test(content)
      ).textContent;
    }

    function clickCount(times: number, button: HTMLElement) {
      [...Array(times)].forEach(() => userEvent.click(button));
    }

    const expensesButton = screen.getByRole('link', { name: /expenses/i });

    userEvent.click(expensesButton);

    const incrementButton = screen.getByText(/increment/i);
    const decrementButton = screen.getByText(/decrement/i);

    clickCount(1, incrementButton);
    expect(getSpanCount()).toBe('1');

    clickCount(1, decrementButton);
    expect(getSpanCount()).toBe('0');

    clickCount(10, incrementButton);
    expect(getSpanCount()).toBe('10');

    clickCount(40, decrementButton);
    expect(getSpanCount()).toBe('-30');
  });

  it('can filter invoices', () => {
    const invoicesButton = screen.getByRole('link', { name: /invoices/i });
    const invoiceBox = () => document.querySelector('div > h2') as HTMLElement;

    userEvent.click(invoicesButton);

    expect(invoiceBox().textContent).toBe('🤡 No selected invoice');

    const oceanInvoice = screen.getByRole('link', { name: /ocean/i });

    userEvent.click(oceanInvoice);

    expect(invoiceBox().textContent).toBe('Invoice#2003');
  });
});
