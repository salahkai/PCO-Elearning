import logo from "./logo.svg";
import "./App.css";
import Files from "./components/files";
import NavBarCom from "./components/navbarcom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div>
      <NavBarCom></NavBarCom>
      <Container>
        <Files></Files>
      </Container>
    </div>
  );
}

export default App;
