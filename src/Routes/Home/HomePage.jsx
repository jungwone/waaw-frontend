import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_POST_QUERY } from "./Queries";
import PostList from "../../Components/Post/PostList";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";
import useInput from "../../Hooks/useInput";

const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(20);
  const category = useInput("ALL");

  const { data, loading, fetchMore } = useQuery(HOME_POST_QUERY, {
    variables:
      category.value === "ALL"
        ? { skip, take }
        : { skip, take, category: category.value },
  });

  return (
    <>
      <CategoryTab selectedCategory={category} />
      {!loading && data && (
        <PostList posts={data.findManyPostsWithCategory} loading={loading} />
      )}
    </>
  );
};

export default HomePage;
