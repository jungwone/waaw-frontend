import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PostCard from "./PostCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const PostSlider = ({ posts }) => {
  return (
    <Wrapper>
      <h2>최근 인기 글</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
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
            thumbnail={post.thumbnail}
            author={post.author}
          />
        ))}
      </Carousel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  h2 {
    font-family: "CookieRun-Regular";
    font-size: 25px;
    text-align: center;
    letter-spacing: 2px;
    padding: 1.5rem 0;
  }
  .react-multiple-carousel__arrow {
    z-index: 4;
  }
`;

export default PostSlider;
