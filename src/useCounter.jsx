import { useState } from "react";

export function useCounter() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter((count) => count + 1);
  }
  function decrementCounter() {
    setCounter((count) => count - 1);
  }
  function reset() {
    setCounter(0);
  }
  return { counter, incrementCounter, decrementCounter, reset };
}
