import GreetingsBar from "./GreetingsBar";
import TopBar from "./TopBar";
import JobBar from "./JobBar";
import { taskData } from "./data";
import styled from "styled-components";

const HeroSection = ({ modalOpen, handleModalOpenClick }) => {
  return (
    <HeroContainer modalOpen={modalOpen}>
      <TopBar />
      <MainSectionContainer>
        <GreetingsBar />
        <JobBarContainer>
          {taskData.map((data) => (
            <JobBar
              key={data}
              title={data.jobType}
              taskList={data.taskList}
              handleClick={handleModalOpenClick}
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
