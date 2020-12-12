import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_POST_QUERY } from "./Queries";
import PostList from "../../Components/Post/PostList";
import CategoryTab from "../../Components/CategoryTab/CategoryTab";
import useInput from "../../Hooks/useInput";
import InfiniteScroll from "../../Components/InfiniteScroll/InfiniteScroll";

const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [take, setTake] = useState(10);
  const [hasMore, setHasMore] = useState(true);
  const category = useInput("ALL");

  const { data, loading, fetchMore } = useQuery(HOME_POST_QUERY, {
    variables:
      category.value === "ALL"
        ? { skip, take }
        : { skip, take, category: category.value },
  });

  const getMorePosts = () => {
    let startIdex = skip + take;
    setSkip(skip + take);

    fetchMore({
      variables:
        category.value === "ALL"
          ? { skip: startIdex, take }
          : { skip: startIdex, take, category: category.value },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return previousResult;
        } else {
          const prevPosts = data.findManyPostsWithCategory;
          const newPosts = fetchMoreResult.findManyPostsWithCategory;

          fetchMoreResult.findManyPostsWithCategory = [
            ...prevPosts,
            ...newPosts,
          ];

          if (newPosts.length < take) {
            setHasMore(false);
          }
          console.log(fetchMoreResult);

          return { ...fetchMoreResult };
        }
      },
    });
  };

  return (
    <>
      <InfiniteScroll fetchMore={getMorePosts} hasMore={hasMore} />
      <CategoryTab selectedCategory={category} setSkip={setSkip} />
      {!loading && data && (
        <PostList posts={data.findManyPostsWithCategory} loading={loading} />
      )}
      <button onClick={getMorePosts}>더 불러오기</button>
    </>
  );
};

export default HomePage;
