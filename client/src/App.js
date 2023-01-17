import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import { useEffect, useState } from "react";
import { TaskState } from "./context/TaskContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { setUser } = TaskState();

  async function checkLoginState() {
    const logged = localStorage.getItem("isLoggedIn");
    if (logged === "true") {
      setIsLoggedIn(true);
      setUser({
        firstName: localStorage.getItem("firstName"),
        userType: localStorage.getItem("userType"),
        profileImg: localStorage.getItem("profileImg"),
      });
    } else {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    checkLoginState();
    // eslint-disable-next-line
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Homepage /> : <Loginpage />}
        ></Route>
        <Route path="/login" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
