import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Box, InputLabel } from "@mui/material";
import { TaskState } from "../../context/TaskContext";
import { MenuProps, months, names, workTypes } from "../HeroSection/data";

const Modal = ({ handleCancelClick }) => {
  const { selectedTask, tasks, setTasks } = TaskState();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [closeDate, setCloseDate] = useState(new Date());
  const [personName, setPersonName] = useState([]);
  const [workType, setWorkType] = useState([]);
  const [priority, setPriority] = useState("HIGH");
  const [updateCall, setUpdateCall] = useState(false);

  useEffect(() => {
    setTitle(selectedTask.taskContent.title);
    setSubject(selectedTask.taskContent.subject);
    setDescription(selectedTask.taskContent.description);
    setCloseDate(selectedTask.taskContent.date);
    setWorkType([selectedTask.taskContent.type]);
    setPriority(selectedTask.taskContent.priority);
    setPersonName([selectedTask.taskContent.employeeName]);
    if (
      tasks[selectedTask.coloumnType].taskList.find(
        (data) => data.id === selectedTask.taskContent.id
      ) !== undefined
    ) {
      setUpdateCall(true);
    }
  }, [selectedTask, tasks]);

  const handleEmployeeChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleWorkChange = (event) => {
    const {
      target: { value },
    } = event;
    setWorkType(typeof value === "string" ? value.split(",") : value);
  };

  const handleUpdateClick = () => {
    let newTasks = JSON.parse(JSON.stringify(tasks));
    let index = newTasks[selectedTask.coloumnType].taskList.findIndex(
      (data) => data.id === selectedTask.taskContent.id
    );
    const date = new Date(closeDate);
    newTasks[selectedTask.coloumnType].taskList[index] = {
      id: selectedTask.taskContent.id,
      title,
      type: workType.toString(),
      subject: subject,
      description: description,
      date: `${
        months[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`,
      priority,
      currentState: selectedTask.taskContent.currentState,
      ongoing: selectedTask.taskContent.ongoing,
      submitted: selectedTask.taskContent.submitted,
      submissionDate: selectedTask.taskContent.submissionDate,
    };
    setTasks(newTasks);
    handleCancelClick();
  };

  const handleAddClick = () => {
    let newTasks = JSON.parse(JSON.stringify(tasks));
    const date = new Date(closeDate);
    const data = {
      id: selectedTask.taskContent.id,
      title,
      type: workType.toString(),
      subject: subject,
      description: description,
      date: `${
        months[date.getMonth()]
      } ${date.getDate()} ${date.getFullYear()}`,
      priority,
      currentState: selectedTask.taskContent.currentState,
      ongoing: selectedTask.taskContent.ongoing,
      submitted: selectedTask.taskContent.submitted,
      submissionDate: selectedTask.taskContent.submissionDate,
    };
    newTasks[selectedTask.coloumnType].taskList.push(data);
    setTasks(newTasks);
    handleCancelClick();
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
                style={{ width: "100%" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                required
                id="outlined-required"
                label="Subject"
                style={{ width: "100%" }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={6}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div style={{ display: "flex", flex: "3", gap: "12px" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Due Date"
                    inputFormat="MM/DD/YYYY"
                    value={closeDate}
                    onChange={(e) => setCloseDate(e)}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                }}
              >
                <div>
                  <InputLabel>Employee Name</InputLabel>
                  <Select
                    label="Chip"
                    multiline={false}
                    value={personName}
                    onChange={handleEmployeeChange}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                    style={{
                      height: "56px",
                      width: "180px",
                    }}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <div>
                  <InputLabel>Work Type</InputLabel>
                  <Select
                    label="Chip"
                    multiline={false}
                    value={workType}
                    onChange={handleWorkChange}
                    placeholder="Select Work Type"
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                    style={{
                      height: "56px",
                      width: "180px",
                      color: "#000",
                    }}
                  >
                    {workTypes.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
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
                      onClick={() => setPriority(data)}
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
            <AddButton
              onClick={() => {
                if (updateCall) {
                  handleUpdateClick();
                } else {
                  handleAddClick();
                }
              }}
            >
              {updateCall ? `UPDATE ` : `ADD `}CARD
            </AddButton>
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
  width: 750px;
  height: 750px;
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
