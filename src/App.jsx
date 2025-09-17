import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount((c) => c + 1);
  };

  const handleDecrementCount = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="container">
      <button className="btn" onClick={handleDecrementCount}>
        -
      </button>
      <div className="count">{count}</div>
      <button className="btn" onClick={handleIncrementCount}>
        +
      </button>
    </div>
  );
};

export default App;
