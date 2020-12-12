import React from "react";
import PostCard from "./PostCard";
import styled from "styled-components";

const PostList = ({ posts = [], loading }) => {
  return (
    <Wrapper>
      {loading && "loading ..."}
      {posts.length === 0 && (
        <NoPostText>"아직 포스트가 없습니다 😥"</NoPostText>
      )}
      {!loading && posts.length >= 1 && (
        <PostListWrapper>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              category={post.category}
              fileUrl={post.fileUrl}
            />
          ))}
        </PostListWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
  width: 100%;

  max-width: 1200px;
  margin: auto;
`;

const NoPostText = styled.div``;

const PostListWrapper = styled.ul`
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 22%);
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 30%);
    gap: 15px;
  }
`;

export default PostList;
