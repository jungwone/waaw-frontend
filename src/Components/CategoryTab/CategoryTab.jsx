import React from "react";
import styled from "styled-components";

const categories = [
  { id: "ALL", name: "전체" },
  { id: "POEM", name: "시" },
  { id: "NOVEL", name: "소설" },
  { id: "REVIEW", name: "리뷰" },
  { id: "FREE", name: "자유" },
  { id: "ESSAY", name: "에세이" },
  { id: "RELATIONSHIP", name: "연애" },
];

const CategoryTab = ({ selectedCategory, setSkip }) => {
  return (
    <Wrapper>
      {categories.map((category) => (
        <CategoryStyle
          onClick={() => {
            selectedCategory.setValue(category.id);
            setSkip(0);
          }}
          className={`${selectedCategory.value === category.id && "active"}`}
          key={category.id}
        >
          {category.name}
        </CategoryStyle>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 600px;
  margin: 40px auto 60px auto;
  @media (max-width: 800px) {
    margin: 40px auto;
  }
`;
const CategoryStyle = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  border: 2px solid #f7f7f7;
  border-radius: 20px;
  &.active {
    border-color: skyblue;
    color: skyblue;
    font-weight: bold;
  }
  @media (max-width: 568px) {
    font-size: 12px;
    padding: 5px 8px;
  }
`;

export default CategoryTab;
