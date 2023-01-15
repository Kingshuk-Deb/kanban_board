// eslint-disable-next-line
import { BsThreeDots, BsPlus } from "react-icons/bs";
import styled from "styled-components";
import TaskBoard from "./TaskBoard";

const JobBar = ({ title, taskList, handleClick, handleChange }) => {
  return (
    <JobBarContainer>
      <JobBarHeaderContainer>
        {title} ({taskList.length})
        <JobBarButtonContainer>
          {title === "New Project" && (
            <BsPlus
              style={{
                scale: "1.5",
                cursor: "pointer",
              }}
              onClick={() => handleClick()}
            />
          )}
          {/* <BsThreeDots
            style={{
              scale: "1.5",
              cursor: "pointer",
            }}
          /> */}
        </JobBarButtonContainer>
      </JobBarHeaderContainer>
      <TaskBoard
        taskList={taskList}
        handleChange={handleChange}
        title={title}
      />
    </JobBarContainer>
  );
};

const JobBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 900;
`;

const JobBarHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobBarButtonContainer = styled.div`
  display: flex;
  justifycontent: space-between;
  alignitems: center;
  gap: 16px;
`;

export default JobBar;
