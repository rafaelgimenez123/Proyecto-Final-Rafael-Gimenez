import React, { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ initialCount, onCountChange }) => {
  const [count, setCount] = useState(initialCount);

  const sumar = () => {
    setCount(count + 1);
    onCountChange(count + 1);
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
      onCountChange(count - 1);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <Button variant="primary" onClick={restar}>
          -
        </Button>
        <span>{count}</span>
        <Button variant="primary" onClick={sumar}>
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
