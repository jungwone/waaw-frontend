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
      {!loading && (
        <PostListWrapper>
          {posts.map((post) => (
            <PostCard
              key={post.uuid}
              id={post.id}
              uuid={post.uuid}
              title={`${
                post.title.length > 12
                  ? post.title.substring(0, 12) + "..."
                  : post.title
              }`}
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
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  @media (max-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export default PostList;
