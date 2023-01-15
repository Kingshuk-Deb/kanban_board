import GreetingsBar from "./GreetingsBar";
import TopBar from "./TopBar";
import JobBar from "./JobBar";
import { months, taskData } from "./data";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HeroSection = ({ modalOpen, handleModalOpenClick }) => {
  const [tasks, setTasks] = useState(taskData);

  const handleChange = (from, to, task) => {
    if (from >= to || Math.abs(from - to) !== 1) {
      return;
    }
    switch (to) {
      case 1: {
        let newTasks = JSON.parse(JSON.stringify(tasks));
        newTasks[from].taskList = newTasks[from].taskList.filter(
          (data) => data.id !== task.id
        );
        newTasks[to].taskList.push({
          id: uuidv4(),
          title: task.title,
          type: task.type,
          date: task.date,
          priority: task.priority,
          currentState: "ongoing",
          ongoing: true,
          submitted: false,
          submissionDate: null,
        });
        setTasks(newTasks);
        break;
      }
      case 2: {
        let newTasks = JSON.parse(JSON.stringify(tasks));
        newTasks[from].taskList = newTasks[from].taskList.filter(
          (data) => data.id !== task.id
        );
        newTasks[to].taskList.push({
          id: uuidv4(),
          title: task.title,
          type: task.type,
          date: task.date,
          priority: task.priority,
          currentState: "submitted",
          ongoing: true,
          submitted: true,
          submissionDate: `${
            months[new Date().getMonth()]
          } ${new Date().getDate()} ${new Date().getFullYear()}`,
        });
        setTasks(newTasks);
        break;
      }
      case 3: {
        let newTasks = JSON.parse(JSON.stringify(tasks));
        newTasks[from].taskList = newTasks[from].taskList.filter(
          (data) => data.id !== task.id
        );
        newTasks[to].taskList.push({
          id: uuidv4(),
          title: task.title,
          type: task.type,
          date: task.date,
          priority: task.priority,
          currentState: "completed",
          ongoing: false,
          submitted: true,
          submissionDate: task.submissionDate,
        });
        setTasks(newTasks);
        break;
      }
      default:
        console.log("Invalid");
    }
  };

  return (
    <HeroContainer modalOpen={modalOpen}>
      <TopBar />
      <MainSectionContainer>
        <GreetingsBar />
        <JobBarContainer>
          {tasks.map((data) => (
            <JobBar
              key={data.jobType}
              title={data.jobType}
              taskList={data.taskList}
              handleClick={handleModalOpenClick}
              handleChange={handleChange}
            />
          ))}
        </JobBarContainer>
      </MainSectionContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  filter: ${(props) => {
    if (props.modalOpen) return "blur(3px)";
    return "blur(0px)";
  }};
  // height: 100%;
  // width: 100%;
`;

const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 36px;
`;

const JobBarContainer = styled.div`
  display: flex;
  // gridTemplateColumns: 1fr 1fr 1fr 1fr;
  padding: 16px;
  justify-content: space-between;
  gap: 16px;
`;

export default HeroSection;
