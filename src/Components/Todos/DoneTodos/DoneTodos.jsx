import React from "react";
import { Col, Row } from "react-bootstrap";
import { mapTodos } from "../TodoUtilis";

const DoneTodos = (props) => {
  let mappedTodos = mapTodos(props.todos);
  return (
    <Col>
      <Row>
        <p>Done</p>
      </Row>
      <Row>{mappedTodos}</Row>
    </Col>
  );
};

export default DoneTodos;
