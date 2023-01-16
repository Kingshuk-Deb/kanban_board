import { createContext, useContext, useState } from "react";
import { defaulttaskData, taskData } from "../components/HeroSection/data";

const Task = createContext();

const Context = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);
  const [selectedTask, setSelectedTask] = useState({
    coloumnType: 0,
    taskContent: defaulttaskData,
  });

  return (
    <Task.Provider value={{ tasks, setTasks, selectedTask, setSelectedTask }}>
      {children}
    </Task.Provider>
  );
};

export const TaskState = () => {
  return useContext(Task);
};

export default Context;
