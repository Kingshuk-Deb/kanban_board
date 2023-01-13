import React from "react";
import SideBarListComponent from "./SideBarListComponent";
import styled from "styled-components";
import { menuDatas } from "./data";

const SideBar = () => {
  return (
    <>
      <SideBarBg>
        <SideBarHeaderContainer>
          <SideBarMenuContainer>
            <SideBarTitle>TASKBAN</SideBarTitle>
            {menuDatas.map((data) => (
              <SideBarListComponent
                key={data.title}
                title={data.title}
                listData={data.menuItems}
              />
            ))}
          </SideBarMenuContainer>
          <SideBarButton>LOGOUT</SideBarButton>
        </SideBarHeaderContainer>
      </SideBarBg>
    </>
  );
};

const SideBarBg = styled.div`
  background: #ffffff;
  height: 100%;
  box-shadow: 4px 0px 30px 10px rgba(0, 0, 0, 0.05);
`;

const SideBarHeaderContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  width: 250px;
  display: flex;
  flex-direction: column;
  // justifyContent: space-between;
  align-items: center;
  padding-block: 36px;
  gap: 196px;
`;

const SideBarTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 36px;
  color: #48409e;
`;

const SideBarButton = styled.div`
  background: #48409e;
  padding: 6px;
  color: #fff;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const SideBarMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export default SideBar;
