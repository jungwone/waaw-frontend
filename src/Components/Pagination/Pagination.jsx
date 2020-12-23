import React from "react";
import MaterialPagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const Pagination = ({ totalPage, handlePage, page }) => {
  console.log(totalPage);
  return (
    <Wrapper>
      <MaterialPagination
        page={Number(page)}
        color="primary"
        showFirstButton
        showLastButton
        count={totalPage}
        onChange={handlePage}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "RIDIBatang";
  display: flex;
  justify-content: center;
`;
export default Pagination;
