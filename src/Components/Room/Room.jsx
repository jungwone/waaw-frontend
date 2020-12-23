import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { categories } from "../Header/Menus";
import { DoorIcon } from "../Icons/Icons";

const Room = () => {
  return (
    <Wrapper>
      <h2>방 구경하기</h2>
      <RoomList>
        {categories.map((category) => (
          <RoomCard
            key={category.id}
            className={category.id}
            to={{
              pathname: `/board/${category.id}`,
              state: {
                roomName: category.name,
              },
            }}
          >
            <div className={`room-image `}>
              <DoorIcon />
            </div>
            <div className="room-name">{category.name}</div>
          </RoomCard>
        ))}
      </RoomList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 120px;
  h2 {
    font-size: 2rem;
    text-align: center;
    @media (max-width: 568px) {
      font-size: 25px;
    }
  }
`;

const RoomList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 568px) {
    padding-top: 50px;
  }
`;

const RoomCard = styled(Link)`
  cursor: pointer;
  width: 23%;
  height: 20vw;
  max-height: 200px;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;
  color: #888888;
  background-color: #fff;
  border-radius: 10px;
  &:hover {
    transform: translateY(-10%);
    border-color: #119100;
    color: #000;

    svg {
      fill: #119100;
    }
  }

  @media (max-width: 568px) {
    font-size: 11px;
    svg {
      width: 40px;
      height: 40px;
    }
  }

  .room-image {
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .room-name {
    flex: 1;
  }
`;

export default Room;
