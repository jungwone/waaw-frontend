import React, { useRef } from "react";
import styled from "styled-components";
import { Cancel } from "../Icons/Icons";

const ImageUploadInput = ({ fileUrl, onChange }) => {
  const inputRef = useRef();
  const onClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };

  return (
    <Wrapper>
      <div className="container">
        <div className={`wrapper ${fileUrl.value && "active"}`}>
          {fileUrl.value !== "" && <Image src={fileUrl.value}></Image>}

          <div className="content">
            <div className="text">No file chosen, yet!</div>
          </div>
          <div
            className="cancel-btn"
            onClick={() => {
              fileUrl.setValue("");
            }}
          >
            <Cancel />
          </div>
        </div>
        <button onClick={onClick} className="custom-btn">
          이미지 업로드
        </button>
        <input
          ref={inputRef}
          id="default-btn"
          type="file"
          hidden
          onChange={onChange}
          accept="image/*"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
    font-family: inherit;
  }
  .wrapper {
    position: relative;
    height: 37vw;
    max-height: 300px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    border: 2px dashed #c2cdda;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 15px;
    &.active {
      border: none;
    }
  }

  .text {
    font-size: 20px;
    font-weight: 500;
    color: #5b5b7b;
  }
  .cancel-btn {
    position: absolute;
    font-size: 20px;
    right: 15px;
    top: 15px;
    color: #9658fe;
    cursor: pointer;
    display: none;
    cursor: pointer;
  }
  .wrapper.active:hover .cancel-btn {
    display: block;
    &:hover {
      svg {
        fill: red;
      }
    }
  }

  .custom-btn {
    display: block;
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    font-family: inherit;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background: #459905;
    margin-bottom: 20px;
  }
`;
const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: contain;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;
export default ImageUploadInput;
