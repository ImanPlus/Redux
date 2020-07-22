import React from 'react';

function Counter(props) {
  const {value, onIncrement, onDecrement} = props;
  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default Counter