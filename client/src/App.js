import "./App.css";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
