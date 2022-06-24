interface ExpensesProps {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
}

export function Expenses({
  count,
  incrementCount,
  decrementCount
}: ExpensesProps) {
  return (
    <main className='flex flex-1 animate-fade flex-col gap-4 text-center'>
      <h2 className='border-b pb-1 text-lg font-medium'>
        Welcome to the Expenses!
      </h2>
      <p>
        current count: <span>{count}</span>
      </p>
      <div className='flex gap-4'>
        <button
          className='rounded bg-red-400 px-2 py-1 text-white'
          type='button'
          onClick={incrementCount}
        >
          increment
        </button>
        <button
          className='rounded bg-red-400 px-2 py-1 text-white'
          type='button'
          onClick={decrementCount}
        >
          decrement
        </button>
      </div>
    </main>
  );
}
