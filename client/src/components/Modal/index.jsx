import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styled from "styled-components";

const Modal = ({ handleCancelClick }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [closeDate, setCloseDate] = useState(new Date());
  const [priority, setPriority] = useState("HIGH");

  const handleClickOnStartDate = (date) => {
    setStartDate(date);
  };

  const handleClickOnCloseDate = (date) => {
    setCloseDate(date);
  };

  const handleClickPriority = (priorityType) => {
    console.log(priorityType);
    setPriority(priorityType);
  };

  return (
    <PositionContainer>
      <OuterDivContainer>
        <InnerDivContainer>
          <ModalTitleContainer>New Card</ModalTitleContainer>
          <div
            style={{
              display: "flex",
              gap: "24px",
              width: "98%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingInline: "16px",
                gap: "24px",
                flex: "3",
              }}
            >
              <TextField
                required
                id="outlined-required"
                label="Project Title"
                // defaultValue="Please enter the project tilte"
                placeholder="Please enter the project tilte"
                style={{
                  width: "100%",
                }}
              />
              <TextField
                required
                id="outlined-required"
                label="Subject"
                // defaultValue="Please enter the subject"
                placeholder="Please enter the subject"
                style={{
                  width: "100%",
                }}
              />
              <div
                style={{
                  paddingBlock: "4px",
                }}
              ></div>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={6}
                // defaultValue="Add a description"
                placeholder="Add a description"
                required
              />
              <div
                style={{
                  display: "flex",
                  flex: "3",
                  gap: "12px",
                }}
              >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/DD/YYYY"
                    value={startDate}
                    onChange={(e) => handleClickOnStartDate(e)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM/DD/YYYY"
                    value={closeDate}
                    onChange={(e) => handleClickOnCloseDate(e)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <PriorityContainer>
                Priority
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                  }}
                >
                  {["HIGH", "MEDIUM", "LOW"].map((data) => (
                    <PriorityButtonContainer
                      onClick={() => handleClickPriority(data)}
                      key={data}
                      priority={priority}
                      data={data}
                    >
                      {data}
                    </PriorityButtonContainer>
                  ))}
                </div>
              </PriorityContainer>
            </div>
          </div>
          <ButtonContainer>
            <CancelButton onClick={() => handleCancelClick()}>
              CANCEL
            </CancelButton>
            <AddButton>ADD CARD</AddButton>
          </ButtonContainer>
        </InnerDivContainer>
      </OuterDivContainer>
    </PositionContainer>
  );
};

const PriorityButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 20px;
  padding-block: 8px;
  padding-inline: 16px;
  width: 36px;
  cursor: pointer;
  color: ${(props) => {
    if (props.priority === props.data) return "#fff";
    return "#000";
  }};
  border: ${(props) => {
    if (props.priority === props.data) return "none";
    if (props.data === "HIGH") return "1px solid #FF7979";
    if (props.data === "MEDIUM") return "1px solid #FFBA53";
    return "1px solid #2BA700";
  }};
  background: ${(props) => {
    if (props.priority !== props.data) return "none";
    if (props.data === "HIGH") return "#FF7979";
    if (props.data === "MEDIUM") return "#FFBA53";
    return "#2BA700";
  }};
`;

const ModalTitleContainer = styled.div`
  font-family: "Nunito", sans-serif;
  padding: 16px;
  font-size: 24px;
  color: #48409e;
  font-weight: 900;
`;

const PositionContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5%;
`;

const OuterDivContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  background: #bfb9ff;
  width: 700px;
  height: 700px;
  margin: auto;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const InnerDivContainer = styled.div`
  width: 97%;
  aspect-ratio: 1;
  background: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const PriorityContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 12px;
  font-size: 12px;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  padding-bottom: 16px;
  display: flex;
  justify-content: flex-end;
  width: 98%;
  gap: 16px;
`;

const CancelButton = styled.div`
  border: 1px solid #ff7979;
  padding-block: 8px;
  padding-inline: 16px;
  border-radius: 20px;
  cursor: pointer;
  color: #ff7979;
  font-weight: 900;
`;

const AddButton = styled.div`
  padding-block: 8px;
  padding-inline: 16px;
  background: #48409e;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
`;

export default Modal;
