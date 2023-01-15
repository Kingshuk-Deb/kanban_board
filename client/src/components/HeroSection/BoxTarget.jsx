import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes, jobTypes } from "./data";

const BoxTarget = ({ handleChange, listTitle }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      const data = { ...item, to: listTitle };
      handleChange(jobTypes[data.from], jobTypes[data.to], {
        id: data.task.id,
        title: data.task.title,
        type: data.task.type,
        date: data.task.date,
        priority: data.task.priority,
        submissionDate: data.task.submissionDate,
      });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div
      ref={drop}
      style={{
        minHeight: `${isOver ? "100px" : "10px"}`,
        width: "100%",
        background: `${isOver ? "#fff" : "transparent"}`,
        borderRadius: "8px",
      }}
    ></div>
  );
};

export default BoxTarget;
