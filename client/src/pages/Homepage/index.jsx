import SideBar from "../../components/SideBar";
import HeroSection from "../../components/HeroSection";
import styled from "styled-components";
import Modal from "../../components/Modal";
import { useState } from "react";

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCancelClick = () => {
    setModalOpen(false);
    document.body.classList.remove("active-modal");
  };

  const handleopenClick = () => {
    setModalOpen(true);
    document.body.classList.add("active-modal");
  };

  return (
    <Container>
      {modalOpen && <Modal handleCancelClick={handleCancelClick} />}
      <SideBar />
      <HeroSection
        handleModalOpenClick={handleopenClick}
        modalOpen={modalOpen}
      />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Mulish", sans-serif;
  background: #f1f0ff;
  display: flex;
  position: "relative";
`;

export default Homepage;
