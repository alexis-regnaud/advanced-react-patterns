import { useState } from "react";

function useCounter(intialeCount) {
  const [count, setCount] = useState(intialeCount);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return { count, handleIncrement, handleDecrement };
}

export { useCounter };
