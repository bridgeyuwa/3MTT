import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    if (count < limit) setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Click Counter</h1>
      <div className="counter">{count}</div>
      <div className="buttons">
        <button onClick={decrease} disabled={count === 0}>Decrease</button>
        <button onClick={increase} disabled={count === limit}>Increase</button>
      </div>
      {count === limit && <p className="limit-msg">You've reached the limit!</p>}
    </div>
  );
}

export default App;
