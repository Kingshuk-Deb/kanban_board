import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["lise", "tamekia", "ranee", "refugio", "sunshine"];

async function login({ username, password }) {
  if (username === "" || password === "") {
    return alert("Enter Proper Details");
  }
  const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json; charset=utf-8",
  };

  const bodyContent = JSON.stringify({
    username: username,
    password: password,
  });

  const reqOptions = {
    url: "http://localhost:5001/user/login",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  try {
    const response = await axios.request(reqOptions);
    if (response.data.success) {
      const firstName = response.data.user.firstName;
      const userType = response.data.user.userType;
      const profileImg = response.data.user.profileImg;
      console.log({ firstName, userType, profileImg });
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("userType", userType);
      localStorage.setItem("profileImg", profileImg);
      window.location.replace("/");
    }
  } catch (err) {
    const error = err.response.data.error || err.message;
    alert(error);
  }
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Loginpage = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [password, setPassword] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    console.log(personName);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <LeftSide>
          <TopLeft>
            <Title>Kanban Board</Title>
            <SubTitle>Made by Kingshuk Deb</SubTitle>
          </TopLeft>
          <MiddleLeft>
            <div>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
                style={{ width: "100%", height: "40px" }}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </MiddleLeft>
          <LoginButton
            onClick={() =>
              login({
                username: personName.toString(),
                password,
              })
            }
          >
            Login
          </LoginButton>
        </LeftSide>
        <RightSide>
          <ImgDiv>
            {["T", "A", "S", "K", "B", "A", "N"].map((data, index) => (
              <p key={index}>{data}</p>
            ))}
          </ImgDiv>
        </RightSide>
      </LoginBox>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(109.27deg, #48409e 20.29%, #bfb9ff 96.58%); */
  background: linear-gradient(109.27deg, #d2c1fd 20.29%, #c8e4f0 96.58%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  background: linear-gradient(
    115.7deg,
    #ffffff 31.12%,
    rgba(255, 255, 255, 0) 101.91%
  );
  filter: drop-shadow(-15px -15px 30px #efe8ff)
    drop-shadow(15px 15px 30px rgba(0, 0, 0, 0.25));
  border-radius: 24px;
  display: flex;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 75px;
  padding-right: 105px;
  padding-block: 50px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MiddleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const SubTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  color: #939393;
  margin-bottom: 16px;
`;

const Input = styled.input`
  border: 1px solid #939393;
  outline: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  flex-grow: 0;
  width: 250px;
  height: 20px;
`;

const RightSide = styled.div`
  width: 350px;
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background: linear-gradient(91.75deg, #48409e -9.31%, #4332f7 130.93%);
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 400;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.div`
  font-size: 16px;
  font-weight: 700;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270.91deg, #8e89e7 0%, #d2c1fd 79.88%);
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198),
    0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275),
    0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035),
    0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725),
    0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802);
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

export default Loginpage;
