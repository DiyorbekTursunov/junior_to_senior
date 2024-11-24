import { useCount } from "../hooks/useCount";

export default function Counter() {
  const { count, increment, decrement } = useCount();
  
  return (
    <div className="flex items-center gap-4 justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        onClick={decrement}
      >
        Decrement
      </button>
      <p className="text-lg font-semibold text-white">Count: {count}</p>
    </div>
  );
}
