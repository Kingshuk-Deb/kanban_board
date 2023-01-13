import React from "react";
import { useState } from "react";
import {
  BsKanbanFill,
  BsCardList,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { MdTimeline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";
import styled from "styled-components";

const SideBarListComponent = ({ title, listData }) => {
  const [option, setOption] = useState("Task Board");
  const barIcons = {
    "Task Board": <BsKanbanFill />,
    List: <BsCardList />,
    Timeline: <MdTimeline />,
    Calendar: <BsFillCalendarCheckFill />,
    Progress: <GiProgression />,
    Forms: <FaWpforms />,
  };

  const handleClick = (data) => {
    setOption(data);
  };

  return (
    <SideBarHeaderListContainer>
      <SideBarHeaderListTitle>{title}</SideBarHeaderListTitle>
      <SideBarListContainer>
        {listData.map((data) => (
          <SideBarListItem
            onClick={() => {
              handleClick(data);
            }}
            option={option}
            data={data}
            key={data}
          >
            {barIcons[data]}
            {data}
          </SideBarListItem>
        ))}
      </SideBarListContainer>
    </SideBarHeaderListContainer>
  );
};

const SideBarHeaderListContainer = styled.div``;
const SideBarHeaderListTitle = styled.p`
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
`;
const SideBarListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SideBarListItem = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${(props) => {
    if (props.option === props.data) return "rgb(72, 64, 158)";
    return "#6F6F6F";
  }};
  background: ${(props) => {
    if (props.option === props.data) return "rgba(191, 185, 255, 0.2)";
    return "none";
  }};
  cursor: pointer;
  padding: 8px;
  width: 160px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default SideBarListComponent;
