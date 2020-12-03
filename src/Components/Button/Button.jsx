import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick }) => {
  return <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  width: 100%;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: #6cd47f;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
  cursor: pointer;
`;

export default Button;
