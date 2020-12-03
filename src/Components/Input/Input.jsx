import React from "react";
import styled from "styled-components";

const Input = ({ placeholder, value, onChange, type, className, required }) => {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      required={required}
    ></InputStyle>
  );
};

const InputStyle = styled.input`
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  height: 35px;
  padding: 0 15px;
  font-size: 14px;
`;

export default Input;
