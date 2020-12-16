import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { s3url } from "../../config";
import UserImage from "../UserImage/UserImage";

const Post = ({ loading, data }) => {
  const post = data?.findOnePost;

  return (
    <>
      {!loading
        ? data && (
            <Wrapper>
              <Title>{post.title}</Title>
              <ImageWrapper>
                <Image src={`${s3url}/photos/${post.fileUrl}`} alt="hey" />
              </ImageWrapper>

              <Content>{post.content}</Content>
              <DateText>
                {moment(Number(post.createdAt)).format("YYYY. MM. DD. H : mm")}
              </DateText>
              <UserBox>
                <UserImage
                  src={
                    post.author.avatar
                      ? `${s3url}/user/${post.author.avatar}`
                      : `${s3url}/smiley.png`
                  }
                  alt="avatar"
                />

                <DetailBox>
                  <div>{post.author.nickname}</div>
                  <div>글 86개</div>
                </DetailBox>
              </UserBox>
            </Wrapper>
          )
        : "Loading . . ."}
    </>
  );
};

const UserBox = styled.div`
  border: 1px solid #f0f0f0;
  display: flex;
  padding: 15px;
`;

const DetailBox = styled.div`
  padding-left: 20px;
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family: "SDMiSaeng";
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: 26px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.div`
  overflow-wrap: break-word;
  font-size: 50px;
  margin-bottom: 25px;
  text-align: center;
  @media (max-width: 568px) {
    font-size: 30px;
  }
`;

const Content = styled.pre`
  white-space: pre-wrap;
  line-height: 1.3;
  margin-bottom: 25px;

  @media (max-width: 568px) {
    font-size: 23px;
  }
`;

const DateText = styled.div`
  text-align: right;
  color: #888888;
  margin-bottom: 25px;
`;

export default Post;
