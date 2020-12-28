import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import { Cancel } from "../Icons/Icons";
import { s3url } from "../../config";

const ImageUploadInput = ({ fileUrl, onChange, setNewPhoto, avatar }) => {
  const inputRef = useRef();

  const onClick = useCallback((e) => {
    e.preventDefault();
    inputRef.current.click();
  }, []);

  const onCancel = useCallback(() => {
    fileUrl.setValue("");
    setNewPhoto();
  }, [fileUrl, setNewPhoto]);

  return (
    <Wrapper>
      <div className="container">
        <div className={`wrapper ${fileUrl.value && "active"}`}>
          <Image
            src={
              fileUrl.value === "" ? `${s3url}/photos/${avatar}` : fileUrl.value
            }
          ></Image>

          {fileUrl.value !== "" && (
            <div className="cancel-btn" onClick={onCancel}>
              <Cancel />
            </div>
          )}
        </div>
        <button onClick={onClick} className="custom-btn">
          사진 변경
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
    display: flex;
    align-items: center;
  }
  .wrapper {
    display: flex;
    align-items: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;

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
    cursor: pointer;
    position: absolute;
    z-index: 2;
    font-size: 20px;
    left: 60px;
    top: 0;
    color: #9658fe;
    svg {
      width: 15px;
      height: 15px;
      fill: #888888;
    }
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
    margin-left: 50px;
    width: 100px;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 13px;

    font-family: inherit;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background: #459905;
  }
`;
const Image = styled.div`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;
export default ImageUploadInput;
