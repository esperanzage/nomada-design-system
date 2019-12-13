import React from "react";
import styled from "styled-components";

const Scard = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  width: 80%;
  height: 40%;

  margin: 64px;
  padding: 40px 32px;
`;

const Stitle = styled.h1`
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;

  margin: 0 16px 0 0;

  color: #292929;
`;

const Card = (props: { children: React.ReactNode; title: string }) => {
  return (
    <Scard>
      {" "}
      <Stitle>{props.title}</Stitle>
      {props.children}
    </Scard>
  );
};
export default Card;
