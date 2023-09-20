import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    return setNum(num + 1);
  };

  const decNum = () => {
    return num > 0 ? setNum(num - 1) : alert("Sorry,value zero is reached");
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>{num}</h1>
        </div>
        <div className="buttons">
          <button onClick={incNum}>PLUS +</button>
          <button onClick={decNum}>MINUS -</button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
