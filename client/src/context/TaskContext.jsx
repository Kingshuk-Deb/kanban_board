import { createContext, useContext, useState } from "react";
import { defaulttaskData, taskData } from "../components/HeroSection/data";

const Task = createContext();

const Context = ({ children }) => {
  const [tasks, setTasks] = useState(taskData);
  const [selectedTask, setSelectedTask] = useState({
    coloumnType: 0,
    taskContent: defaulttaskData,
  });
  const [user, setUser] = useState({
    firstName: "",
    userType: "",
    profileImg: "",
  });

  return (
    <Task.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask, user, setUser }}
    >
      {children}
    </Task.Provider>
  );
};

export const TaskState = () => {
  return useContext(Task);
};

export default Context;
