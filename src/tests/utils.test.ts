import { invoices, getData, deleteData } from '../common';

describe('test utilities', () => {
  it('does get the correct invoice based on the id', () => {
    expect(getData(invoices, 2003)).toEqual({
      name: 'Ocean Avenue',
      number: 2003,
      amount: '$9,500',
      due: '07/22/2003'
    });
  });

  it('does delete the correct invoice based on the id', () => {
    expect(deleteData(invoices, 2000)).toEqual([
      {
        name: 'Santa Monica',
        number: 1995,
        amount: '$10,800',
        due: '12/05/1995'
      },
      {
        name: 'Ocean Avenue',
        number: 2003,
        amount: '$9,500',
        due: '07/22/2003'
      },
      {
        name: 'Tubthumper',
        number: 1997,
        amount: '$14,000',
        due: '09/01/1997'
      },
      {
        name: 'Wide Open Spaces',
        number: 1998,
        amount: '$4,600',
        due: '01/27/1998'
      }
    ]);
  });
});
