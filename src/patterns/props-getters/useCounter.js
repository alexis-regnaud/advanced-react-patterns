import { useState } from "react";

//Function which concat all functions together
const callFnsInSequence = (...fns) => (...args) =>
  fns.forEach((fn) => fn && fn(...args));

function useCounter({ initial, max }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount((prevCount) => Math.min(prevCount + 1, max));
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  //props getter for 'Counter'
  const getCounterProps = ({ ...otherProps } = {}) => ({
    value: count,
    "aria-valuemax": max,
    "aria-valuemin": 0,
    "aria-valuenow": count,
    ...otherProps
  });

  //props getter for 'Decrement'
  const getDecrementProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(handleDecrement, onClick),
    disabled: count === 0,
    ...otherProps
  });

  //props getter for 'Increment'
  const getIncrementProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(handleIncrement, onClick),
    disabled: count === max,
    ...otherProps
  });

  return {
    count,
    handleIncrement,
    handleDecrement,
    getCounterProps,
    getDecrementProps,
    getIncrementProps
  };
}

export { useCounter };
