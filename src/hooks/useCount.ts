import { useEffect, useState } from "react";

function initilizeCount() {
        const saveCount = localStorage.getItem("count");
        return saveCount ? Number(saveCount) : 0
}

export function useCount() {
  const [count, setCount] = useState(initilizeCount);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return {count, increment, decrement}
}
