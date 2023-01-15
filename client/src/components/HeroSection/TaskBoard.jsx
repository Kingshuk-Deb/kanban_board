import TaskBox from "./TaskBox";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoxTarget from "./BoxTarget";

const TaskBoard = ({ taskList, handleChange, title }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <TaskBoxContainer>
        {taskList.map((data) => (
          <TaskBox
            key={data.title}
            id={data.id}
            title={data.title}
            type={data.type}
            date={data.date}
            priority={data.priority}
            currentState={data.currentState}
            submissionDate={data.submissionDate}
            listTitle={title}
          />
        ))}
        <BoxTarget handleChange={handleChange} listTitle={title}/>
      </TaskBoxContainer>
    </DndProvider>
  );
};

const TaskBoxContainer = styled.div`
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
