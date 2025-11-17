import React, { useState, useEffect } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${count}`;
    return () => {
      // cleanup se necessário
    };
  }, [count]);

  return (
    <div className="contador">
      <h2>Contador</h2>
      <div>
        <button onClick={() => setCount(c => c - 1)}>-</button>
        <span style={{ margin: "0 12px" }}>{count}</span>
        <button onClick={() => setCount(c => c + 1)}>+</button>
      </div>
    </div>
  );
}
