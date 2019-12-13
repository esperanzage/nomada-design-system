import React, { useState } from "react";
import styled from "styled-components";

const Sbutton = styled.button`
  background: #ffe33e;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 16px;
  border: 0;
`;

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Sbutton onClick={() => setCount(count + 1)}>Click me</Sbutton>
    </div>
  );
};

export default Button;
