import { useCounter } from './useCounter';

interface ProductCounterProps {
  initialValue?: number;
}

export function ProductCounter({ initialValue }: ProductCounterProps) {
  // const [count, setCount] = React.useState(initialValue ?? 0);

  // const increment = () => setCount((prevCount) => prevCount + 1);
  // const decrement = () => setCount((prevCount) => prevCount - 1);
  // // const reset = () => setCount(initialValue ?? 0);
  const { count, increment, decrement } = useCounter(initialValue);

  return (
    <div>
      <button
        onClick={decrement}
        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700"
      >
        -
      </button>
      <input type="text" className="w-20 p-3 text-center" value={count} readOnly />
      <button
        onClick={increment}
        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-700"
      >
        +
      </button>
    </div>
  );
}
