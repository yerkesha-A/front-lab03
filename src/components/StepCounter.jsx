import { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  const [history, setHistory] = useState([]);
  const [operationCount, setOperationCount] = useState(0);

  const increment = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const decrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
    setOperationCount(operationCount + 1);
  };

  const reset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h3>Count: {count}</h3>
      <p>Total operations: {operationCount}</p>

      <p>
        History (last 5):{" "}
        {history.slice(-5).join(", ") || "No history yet"}
      </p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default StepCounter;
