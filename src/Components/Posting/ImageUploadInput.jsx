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
          <div className="image">
            {fileUrl.value !== "" && (
              <img src={`${fileUrl.value}`} alt="post" />
            )}
          </div>
          <div className="content">
            <div className="text">No file chosen, yet!</div>
          </div>
          <div className="cancel-btn">
            <Cancel />
          </div>
        </div>
        <button onClick={onClick} id="custom-btn">
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
    /* max-height: 30vw;
    max-width: 650px; */
    position: relative;
  }
  .wrapper {
    position: relative;
    height: 37vw;
    max-height: 280px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    border: 2px dashed #c2cdda;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .wrapper.active {
    border: none;
  }
  .wrapper .image {
    position: absolute;
    /* height: auto;
    width: 100%; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .wrapper img {
    height: 100%;
    width: 100%;
    /* object-fit: fill; */
  }

  .wrapper .text {
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
  }
  .wrapper #cancel-btn i:hover {
    color: #e74c3c;
  }

  .container #custom-btn {
    display: block;
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 10px;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    background: #459905;
    margin-bottom: 20px;
  }
`;

export default ImageUploadInput;
