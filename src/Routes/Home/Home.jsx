import React from "react";
import Banner from "../../Components/Banner/Banner";
import PostSlider from "../../Components/Post/PostSlider";
import { useQuery } from "@apollo/react-hooks";
import { POPULAR_POST_QUERY } from "./Queries";
import Room from "../../Components/Room/Room";
import { GrayWrapper } from "../../Styles/Wrapper";

const Home = () => {
  const { data, loading } = useQuery(POPULAR_POST_QUERY, {
    variables: {
      skip: 0,
      take: 12,
    },
  });

  return (
    <GrayWrapper>
      <Banner src="wil-stewart-RpDA3uYkJWM-unsplash.jpg" />
      <Room />
      {!loading && data && <PostSlider posts={data.findPopularPosts} />}
    </GrayWrapper>
  );
};

export default Home;
