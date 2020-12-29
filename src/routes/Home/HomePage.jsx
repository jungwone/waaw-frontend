import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { HOME_POST_QUERY } from "./Queries";
import PostList from "../../components/Post/PostList";
import CategoryTab from "../../components/CategoryTab/CategoryTab";
import useInput from "../../hooks/useInput";
import InfiniteScroll from "../../components/InfiniteScroll/InfiniteScroll";
let take = 10;
const HomePage = () => {
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const category = useInput("ALL");

  useEffect(() => {
    return () => {
      setSkip(0);
      setHasMore(true);
    };
  }, [skip, hasMore]);

  const { data, loading, fetchMore } = useQuery(HOME_POST_QUERY, {
    variables:
      category.value === "ALL"
        ? { skip, take }
        : { skip, take, category: category.value },
  });

  const fetchMoreData = () => {
    let startIndex = data?.findManyPostsWithCategory.length
      ? data.findManyPostsWithCategory.length
      : take;
    fetchMore({
      variables:
        category.value === "ALL"
          ? { skip: startIndex, take }
          : { skip: startIndex, take, category: category.value },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        } else {
          // if (fetchMoreResult.findManyPostsWithCategory.length < take) {
          //   setHasMore(false);
          // }
          fetchMoreResult.findManyPostsWithCategory = [
            ...prev.findManyPostsWithCategory,
            ...fetchMoreResult.findManyPostsWithCategory,
          ];
          return fetchMoreResult;
        }
      },
    });
  };

  return (
    <>
      <InfiniteScroll fetchMoreData={fetchMoreData} hasMore={hasMore} />
      <CategoryTab selectedCategory={category} setSkip={setSkip} />
      {!loading && data && (
        <PostList posts={data.findManyPostsWithCategory} loading={loading} />
      )}
    </>
  );
};

export default HomePage;
