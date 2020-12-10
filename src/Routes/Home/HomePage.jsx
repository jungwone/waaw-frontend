import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_POST_QUERY } from "./Queries";
import PostList from "../../Components/Post/PostList";

const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(20);
  const [category, setCategory] = useState("");
  let variables = {
    skip: skip,
    take: take,
  };
  let variablesWithCategory = {
    skip: skip,
    take: take,
    category: category,
  };
  const { data, loading, fetchMore } = useQuery(HOME_POST_QUERY, {
    variables: category !== "" ? variablesWithCategory : variables,
  });
  console.log(data);

  return (
    <>
      {!loading && data && (
        <PostList posts={data.findManyPostsWithCategory} loading={loading} />
      )}
    </>
  );
};

export default HomePage;
