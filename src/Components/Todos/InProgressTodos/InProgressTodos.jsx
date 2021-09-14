import React from "react";
import { Col, Row } from "react-bootstrap";
import { mapTodos } from "../TodoUtilis";

const InProgressTodos = (props) => {
  let mappedTodos = mapTodos(props.inProgressTodos);
  return (
    <Col>
      <Row>
        <p>In Progress</p>
      </Row>
      <Row>{mappedTodos}</Row>
    </Col>
  );
};

export default InProgressTodos;
