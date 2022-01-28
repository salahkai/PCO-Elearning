import logo from "./logo.svg";
import "./App.css";
import Files from "./components/files";
import Branches from "./components/branches";
import NavBarCom from "./components/navbarcom";
import Footer from "./components/footer";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBarCom></NavBarCom>
      <Routes>
        <Route path="/files/" element={<Files />} />
        <Route path="/branch/:speciality" element={<Branches />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
