import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import { s3url } from "../../config";
import { CommentIcon, EmptyHeart, FullHeart } from "../Icons/Icons";
import UserAvatar from "../UserAvatar/UserAvatar";
import { useHistory } from "react-router-dom";

const Post = ({ post, toggleLike, isMe, onDeletePost }) => {
  const history = useHistory();

  const onClickModify = () => {
    history.push(`/updatePost/${post.uuid}`);
  };

  return (
    <>
      <Wrapper>
        <PostContentBox>
          <Title>{post.title}</Title>

          <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
          <DateText>
            {moment(Number(post.createdAt)).format("YYYY. MM. DD. H : mm")}
          </DateText>
          {isMe && (
            <MyOption>
              <button onClick={onClickModify}>수정</button>
              <button onClick={onDeletePost}>삭제</button>
            </MyOption>
          )}
        </PostContentBox>
        <UserInfoBox>
          <UserAvatar
            src={
              post.author.avatar
                ? `${s3url}/photos/${post.author.avatar}`
                : `${s3url}/smiley.png`
            }
            size="large"
            alt="avatar"
          />

          <Detail>
            <div className="nickname">{post.author.nickname}</div>
            <div className="intro">
              {post.author.intro
                ? post.author.intro
                : "자기소개를 작성하지 않았습니다."}
            </div>
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

const MyOption = styled.div`
  text-align: right;
  padding-top: 20px;
  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: #fff;
    color: #888888;
    font-size: 14px;
    &:hover {
      text-decoration: underline;
    }
  }
  button + button {
    margin-left: 20px;
  }
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
  max-width: 800px;
  margin: 0 auto;
  font-family: "RIDIBatang";
  padding-bottom: 30px;
  font-size: 16px;
  padding: 100px 10px 30px 10px;
`;

const PostContentBox = styled.section`
  margin-bottom: 25px;
`;

const Title = styled.div`
  overflow-wrap: break-word;
  font-size: 32px;
  margin-bottom: 100px;
  text-align: center;
  @media (max-width: 568px) {
    font-size: 23px;
  }
`;

const Content = styled.div`
  margin-bottom: 25px;
  font-size: 16px;
  letter-spacing: 0.6px;
  line-height: 1.5;
  min-height: 300px;
  img {
    width: 100%;
  }

  @media (max-width: 568px) {
    font-size: 13px;
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
  color: #333333;
  div {
    padding-bottom: 15px;
  }
  .intro {
    font-size: 13px;
  }
`;

export default Post;
