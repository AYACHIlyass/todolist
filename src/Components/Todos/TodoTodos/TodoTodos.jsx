import React from "react";
import { Col, Row } from "react-bootstrap";
import { mapTodos } from "../TodoUtilis";

const TodoTodos = (props) => {
  let mappedTodos = mapTodos(props.todoTodos);
  return (
    <Col>
      <Row>
        <p>To Do</p>
      </Row>
      <Row>{mappedTodos}</Row>
    </Col>
  );
};

export default TodoTodos;
