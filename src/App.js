import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoListBoard from "./Components/TodoListBoard/TodoListBoard";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid="true"
      centered="true"
      style={{ marginRight: "10px", marginLeft: "10px", width: "98%" }}
    >
      <TodoListBoard></TodoListBoard>
    </Container>
  );
}

export default App;
