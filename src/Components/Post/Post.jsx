import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { s3url } from "../../config";
import UserImage from "../UserImage/UserImage";
import { CommentIcon, EmptyHeart, FullHeart } from "../Icons/Icons";

const Post = ({ post, toggleLike }) => {
  return (
    <>
      <Wrapper>
        <PostContentBox>
          <Title>{post.title}</Title>
          {post.fileUrl && (
            <ImageWrapper>
              <Image src={`${s3url}/photos/${post.fileUrl}`} alt="hey" />
            </ImageWrapper>
          )}

          <Content>{post.content}</Content>
          <DateText>
            {moment(Number(post.createdAt)).format("YYYY. MM. DD. H : mm")}
          </DateText>
        </PostContentBox>
        <UserInfoBox>
          <UserImage
            src={
              post.author.avatar
                ? `${s3url}/user/${post.author.avatar}`
                : `${s3url}/smiley.png`
            }
            alt="avatar"
          />

          <Detail>
            <div>{post.author.nickname}</div>
            <div>글 86개</div>
          </Detail>
        </UserInfoBox>
        <Buttons>
          {post.isLiked === true ? (
            <Button onClick={toggleLike} className="heart">
              <FullHeart />
            </Button>
          ) : (
            <Button onClick={toggleLike} className="heart">
              <EmptyHeart />
            </Button>
          )}
          <CountText>{post.likeCount}</CountText>
          <Button>
            <CommentIcon />
          </Button>
          <CountText>{post.commentCount}</CountText>
        </Buttons>
      </Wrapper>
    </>
  );
};

const Buttons = styled.div`
  transition: 0.4s ease;
`;

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #fff;
  &.heart {
    svg {
      fill: #f72048;
    }
  }
`;

const CountText = styled.span`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 15px;
  &:hover {
    color: skyblue;
  }
`;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-family: "SDMiSaeng";
  padding-top: 20px;
  padding-bottom: 30px;
  font-size: 26px;
`;

const PostContentBox = styled.section`
  margin-bottom: 25px;
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
`;

const UserInfoBox = styled.section`
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  padding: 15px;
  margin-bottom: 25px;
`;

const Detail = styled.div`
  padding-left: 20px;
`;

export default Post;
