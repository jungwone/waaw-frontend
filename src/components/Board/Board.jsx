import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { s3url } from "../../config";

const Board = ({ roomName, posts }) => {
  return (
    <Wrapper>
      <h1>{roomName}</h1>
      {posts.length > 0 && (
        <BoardList>
          {posts.map((post) => (
            <Link to={`/post/${post.uuid}`} key={post.uuid}>
              <ListItem>
                <TextSection>
                  <Title>
                    <strong>{post.title}</strong>
                  </Title>

                  <ExtraInfo>
                    <span>좋아요 {post.likeCount}</span>
                    <span>{moment(Number(post.createdAt)).fromNow()}</span>
                    <span>by {post.author.nickname}</span>
                  </ExtraInfo>
                </TextSection>
                <div className="image">
                  {post.thumbnail && (
                    <img
                      src={`${s3url}/photos/${post.thumbnail}`}
                      alt="thumbnail"
                    />
                  )}
                </div>
              </ListItem>
            </Link>
          ))}
        </BoardList>
      )}
      {posts.length === 0 && <NoPost>포스트가 없습니다</NoPost>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 100px 10px 0px 10px;
  h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 70px;
  }
  @media (max-width: 568px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const NoPost = styled.div`
  font-size: 20px;
  display: flex;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BoardList = styled.ul`
  max-width: 700px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  height: 120px;
  padding: 10px 30px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: #fff;

  @media (max-width: 568px) {
    height: 100px;
    padding: 5px;
  }

  .image {
    flex: 1;
    max-width: 120px;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

const TextSection = styled.div`
  flex: 2.5;
  /* display: flex;
  flex-direction: column; */

  overflow: hidden;
`;

const Title = styled.div`
  padding-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  strong {
    font-size: 20px;
  }
  @media (max-width: 568px) {
    strong {
      font-size: 1rem;
    }
  }
`;

const ExtraInfo = styled.div`
  color: #9e9e9e;
  padding-top: 20px;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 568px) {
    padding-top: 10px;
    font-size: 12px;
  }
  span {
    margin-right: 10px;
  }
`;

export default Board;
