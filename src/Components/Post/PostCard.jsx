import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { s3url } from "../../config";

const PostCard2 = ({ id, uuid, title, category, thumbnail, author }) => {
  return (
    <Wrapper>
      <Link to={`/post/${uuid}`}>
        <Figure>
          <img
            src={
              thumbnail
                ? `${s3url}/photos/${thumbnail}`
                : `${s3url}/marek-piwnicki-uDlWb8uOK2o-unsplash.jpg`
            }
            alt="card"
          />
        </Figure>
        <TextBox>
          <TitleText>{title}</TitleText>
          <AuthorText>by {author.nickname}</AuthorText>
        </TextBox>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 320px;
  padding: 10px;
  @media (max-width: 768px) {
    height: 240px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    img {
      height: 115%;
      width: 115%;
    }
  }
`;

const Figure = styled.div`
  height: 200px;
  overflow: hidden;
  @media (max-width: 768px) {
    height: 160px;
  }
`;
const TextBox = styled.div`
  padding: 15px 10px;
  height: 80px;
  background-color: #f0f0f0;
  margin-top: 5px;
  span {
    display: block;
  }
  @media (max-width: 768px) {
    height: 50px;
    padding: 5px;
  }
`;

const TitleText = styled.span`
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const AuthorText = styled.span`
  font-size: 12px;
  padding-top: 10px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export default PostCard2;
