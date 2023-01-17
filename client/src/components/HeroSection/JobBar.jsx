import { BsPlus } from "react-icons/bs";
import styled from "styled-components";
import { TaskState } from "../../context/TaskContext";
import { defaulttaskData } from "./data";
import TaskBoard from "./TaskBoard";

const JobBar = ({ title, taskList, handleClick, handleChange }) => {
  const { setSelectedTask, user } = TaskState();

  return (
    <JobBarContainer>
      <JobBarHeaderContainer>
        {title} ({taskList.length})
        <JobBarButtonContainer>
          {title === "New Project" && user.userType === "admin" && (
            <BsPlus
              style={{
                scale: "1.5",
                cursor: "pointer",
              }}
              onClick={() => {
                setSelectedTask({
                  coloumnType: 0,
                  taskContent: defaulttaskData,
                });
                handleClick();
              }}
            />
          )}
        </JobBarButtonContainer>
      </JobBarHeaderContainer>
      <TaskBoard
        taskList={taskList}
        handleChange={handleChange}
        title={title}
        handleModalOpenClick={handleClick}
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
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

export default JobBar;
