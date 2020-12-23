import React from "react";
import styled from "styled-components";
import { s3url } from "../../config";

const Banner = ({ src }) => {
  return (
    <Wrapper src={`${s3url}/${src}`}>
      <div className="blur"></div>
      <BannerText>
        <span>글의 집에 오신 것을 환영합니다 !</span>
        <br />
        <span>편히 쉬었다 가세요 :D</span>
      </BannerText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  height: 400px;
  position: relative;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .blur {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 800px) {
    height: 260px;
  }
  @media (max-width: 568px) {
    height: 200px;
  }
  @media (max-width: 380px) {
    height: 180px;
  }
`;

const BannerText = styled.div`
  color: #fff;
  position: relative;
  z-index: 4;
  font-size: 30px;
  line-height: 1.5;
  text-align: center;
  font-family: "CookieRun-Regular";
  letter-spacing: 2px;
  @media (max-width: 568px) {
    font-size: 16px;
  }
`;

export default Banner;
