import React from "react";
import styled from "styled-components";

const PostCard = ({ id, title, category, fileUrl }) => {
  return (
    <Wrapper>
      {fileUrl ? (
        <Image
          src={`https://waaw-photo-bucket.s3.ap-northeast-2.amazonaws.com/photos/${fileUrl}`}
        ></Image>
      ) : (
        <Image>{title}</Image>
      )}

      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  cursor: pointer;
  width: 100%;
  min-width: 80px;
  height: 320px;
  min-height: 145px;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #fafafa;
  overflow: hidden;
  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }

  @media (max-width: 1280px) {
  }
  @media (max-width: 980px) {
    height: 280px;
    padding: 5px;
  }
  @media (max-width: 800px) {
    height: 245px;
  }
  @media (max-width: 768px) {
    height: 225px;
    font-size: 14px;
  }
  @media (max-width: 568px) {
    height: 40vw;
    font-size: 12px;
  }
`;

const Image = styled.div`
  height: 80%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 2px;
  @media (max-width: 768px) {
    height: 70%;
  }
`;

const Title = styled.div`
  font-family: "Gamja Flower";
  padding-top: 5px;
  padding-left: 5px;
  height: 20%;
  background-color: #f7f7f7;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

export default PostCard;
