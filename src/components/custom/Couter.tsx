import { useCounter } from './useCounter';

interface CounterProps {
  title?: string;
  initialValue?: number;
}

export function Counter({ title, initialValue }: CounterProps) {
  // const [count, setCount] = React.useState(initialValue ?? 0);

  // const increment = () => setCount((prevCount) => prevCount + 1);
  // const decrement = () => setCount((prevCount) => prevCount - 1);
  // const reset = () => setCount(initialValue ?? 0);

  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div className="w-2xs rounded border p-4">
      <h2 className="text-xl font-semibold">{title ?? '-'}</h2>
      <p className="my-2 text-3xl">{count}</p>
      <div className="space-x-2">
        <button
          onClick={increment}
          className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700"
        >
          -
        </button>
        <button
          onClick={reset}
          className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
