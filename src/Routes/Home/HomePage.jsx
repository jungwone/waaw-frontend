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
        console.log(prev);
        console.log(fetchMoreResult);
        if (!fetchMoreResult) {
          return prev;
        } else {
          if (fetchMoreResult.findManyPostsWithCategory.length < take) {
            setHasMore(false);
          }
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
      <button
        onClick={() => {
          fetchMore({
            variables:
              category.value === "ALL"
                ? { skip: data.findManyPostsWithCategory.length, take }
                : { skip, take, category: category.value },
            updateQuery: (prev, { fetchMoreResult }) => {
              console.log(prev);
              console.log(fetchMoreResult);
              if (!fetchMoreResult) {
                console.log("no");
                setHasMore(false);
                return prev;
              } else {
                fetchMoreResult.findManyPostsWithCategory = [
                  ...prev.findManyPostsWithCategory,
                  ...fetchMoreResult.findManyPostsWithCategory,
                ];
                return fetchMoreResult;
              }
            },
          });
        }}
      >
        더 불러오기
      </button>
    </>
  );
};

export default HomePage;
