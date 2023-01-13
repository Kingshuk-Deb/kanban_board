import TaskBox from "./TaskBox";
import styled from "styled-components";

const TaskBoard = ({ taskList }) => {
  return (
    <TaskBoxContaiber>
      {taskList.map((data) => (
        <TaskBox
          key={data}
          title={data.title}
          type={data.type}
          date={data.date}
          priority={data.priority}
          currentState={data.currentState}
          submissionDate={data.submissionDate}
        />
      ))}
    </TaskBoxContaiber>
  );
};

const TaskBoxContaiber = styled.div`
  background: #bfb9ff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 240px;
`;

export default TaskBoard;
