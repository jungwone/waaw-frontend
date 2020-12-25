import React from "react";
import styled from "styled-components";

const Button = ({ text, onClick, height, bgColor }) => {
  return (
    <ButtonStyle onClick={onClick} height={height} bgColor={bgColor}>
      {text}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  width: 100%;
  height: ${(props) => (props.height ? props.height : 35)}px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#6cd47f")};
  text-align: center;
  padding: 7px 0px;
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  cursor: pointer;

  @media (max-width: 568px) {
    font-size: 12px;
  }
`;

export default Button;
