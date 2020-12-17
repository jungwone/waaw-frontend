import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostCard = ({ id, uuid, title, category, fileUrl }) => {
  return (
    <Wrapper>
      <Link to={`/post/${uuid}`}>
        {fileUrl ? (
          <Image
            src={`https://waaw-photo-bucket.s3.ap-northeast-2.amazonaws.com/photos/${fileUrl}`}
          ></Image>
        ) : (
          <Image className="title">
            <ImageText>{title}</ImageText>
          </Image>
        )}

        <Title>{title}</Title>
      </Link>
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
  font-size: 26px;
  margin-bottom: 10px;
  border: 1px solid #fafafa;

  &:hover {
    transition: 0.5s;
    transform: scale(1.05);
  }
  a {
    text-decoration: none;
    color: #000;
  }

  /* @media (max-width: 1280px) {
    font-size: 28px;
  } */
  @media (max-width: 980px) {
    height: 280px;
    padding: 5px;
  }
  @media (max-width: 800px) {
    height: 245px;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    height: 225px;
    font-size: 20px;
  }
  @media (max-width: 568px) {
    height: 40vw;
  }
`;

const Image = styled.div`
  height: 75%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    height: 68%;
  }

  &.title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
    padding: 10px;
  }
`;

const ImageText = styled.span`
  word-break: break-all;
`;

const Title = styled.div`
  font-family: "SDMiSaeng";
  padding-top: 5px;
  padding-left: 5px;
  height: 25%;
  background-color: #f7f7f7;
  line-height: 0.9;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

export default PostCard;
