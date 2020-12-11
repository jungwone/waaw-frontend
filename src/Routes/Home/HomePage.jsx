import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_POST_QUERY } from "./Queries";
import PostList from "../../Components/Post/PostList";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";

const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(20);
  const [category, setCategory] = useState("ALL");

  const onClickCategory = (selected) => {
    setCategory(selected);
  };

  const { data, loading, fetchMore } = useQuery(HOME_POST_QUERY, {
    variables: category === "ALL" ? { skip, take } : { skip, take, category },
  });

  return (
    <>
      <CategoryTab
        selectedCategory={category}
        onClickCategory={onClickCategory}
      />
      {!loading && data && (
        <PostList posts={data.findManyPostsWithCategory} loading={loading} />
      )}
    </>
  );
};

export default HomePage;
