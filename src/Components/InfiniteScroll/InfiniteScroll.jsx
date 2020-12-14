import React, { useEffect, useCallback } from "react";

const InfiniteScroll = ({ fetchMoreData, hasMore }) => {
  const handleScroll = useCallback(() => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && hasMore) {
      fetchMoreData();
    }
  }, [hasMore, fetchMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return <></>;
};

export default InfiniteScroll;
