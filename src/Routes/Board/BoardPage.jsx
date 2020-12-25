import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";
import Board from "../../components/Board/Board";
import queryString from "query-string";
import { useQuery } from "@apollo/react-hooks";
import { BOARD_QUERY } from "./Query";
import { GrayWrapper } from "../../styles/Wrapper";
import { getCeilNumber } from "../../service";

let take = 2;

const BoardPage = () => {
  const history = useHistory();
  const { category } = useParams();
  // const roomName = history.location.state.roomName || "";

  let qs = queryString.parse(history.location.search);
  const [pageNumber, setPageNumber] = useState(qs.page ? qs.page : 1);
  const { data, loading, fetchMore } = useQuery(BOARD_QUERY, {
    variables: category
      ? {
          category: category.toLowerCase(),
          skip: qs.page ? (qs.page - 1) * take : 0,
          take,
        }
      : { skip: qs.page ? (qs.page - 1) * take : 0, take },
  });

  const handlePage = (event, page) => {
    setPageNumber(page);
    history.push(`/board/${category}?page=${page}`);

    fetchMore({
      variables: {
        skip: (page - 1) * take,
        take,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        return fetchMoreResult;
      },
    });
  };
  return (
    <GrayWrapper>
      {!loading && data && (
        <>
          <Board posts={data.findManyPostsWithCategory} />
          <Pagination
            totalPage={
              data.findManyPostsWithCategory.length > 0
                ? getCeilNumber(
                    data.findManyPostsWithCategory[0].totalPostCount / take
                  )
                : 1
            }
            page={pageNumber}
            handlePage={handlePage}
          />
        </>
      )}
    </GrayWrapper>
  );
};

export default BoardPage;
