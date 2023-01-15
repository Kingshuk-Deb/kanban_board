import { MdAccessTime } from "react-icons/md";
import { AiOutlineCheckCircle, AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./data";

const TaskBox = ({
  id,
  title,
  type,
  date,
  priority,
  currentState,
  submissionDate,
  listTitle,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: {
      from: listTitle,
      task: {
        id,
        title,
        type,
        date,
        priority,
        currentState,
        submissionDate,
      },
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <TaxBoxContainer ref={drag} isDragging={isDragging}>
      {title}
      <TaxBoxInnerContainer>
        <TaskTypeContainer type={type}>{type}</TaskTypeContainer>
        <TaxContainer>
          <StateContainer type={currentState}>
            {currentState === "completed" ? (
              <>
                <AiOutlineCheckCircle
                  style={{
                    scale: "1.5",
                  }}
                />
                FINISHED
              </>
            ) : currentState === "submitted" ? (
              <>
                <AiOutlineUpload
                  style={{
                    scale: "1.5",
                  }}
                />
                {submissionDate}
              </>
            ) : (
              <>
                <MdAccessTime
                  style={{
                    scale: "1.5",
                  }}
                />
                {date}
              </>
            )}
          </StateContainer>
          <PriorityContainer currentState={currentState} priority={priority}>
            {currentState === "completed"
              ? "DONE"
              : currentState === "submitted"
              ? "Submitted"
              : currentState === "ongoing"
              ? "ONGOING"
              : priority}
          </PriorityContainer>
        </TaxContainer>
      </TaxBoxInnerContainer>
    </TaxBoxContainer>
  );
};

const TaxBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fff;
  width: 85%;
  border-radius: 10px;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  opacity: ${(props) => {
    if (props.isDragging) return "0.5";
    return "1";
  }};
`;

const TaxBoxInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TaskTypeContainer = styled.div`
  color: ${(props) => {
    if (props.type === "Software Development") return "#FF9C28";
    if (props.type === "Collaborative Computing") return "#DF1AFF";
    return "#BA0000";
  }};
  font-size: 12px;
`;

const TaxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StateContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 8px;
  color: ${(props) => {
    if (props.type === "completed") return "#2BA700";
    if (props.type === "submitted") return "#C4C4C4";
    return "#FF7979";
  }};
`;

const PriorityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 20px;
  color: #fff;
  padding-block: 6px;
  padding-inline: 12px;
  background: ${(props) => {
    if (props.currentState === "completed") return "#48409E";
    if (props.currentState === "submitted") return "#6F6F6F";
    if (props.currentState === "ongoing") return "#40A4FF";
    if (props.priority === "HIGH") return "#FF7979";
    if (props.priority === "MEDIUM") return "#FFBA53";
    return "#2BA700";
  }};
`;

export default TaskBox;
