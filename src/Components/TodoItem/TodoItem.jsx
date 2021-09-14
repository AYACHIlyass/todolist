import React from "react";
import { Card } from "react-bootstrap";

const TodoItem = (props) => {
  return (
    <Card
      style={{
        cursor: "pointer",
        marginRight: "3px",
        marginLeft: "3px",
        width: "99%",
      }}
    >
      <Card.Body>
        <Card.Title>{props.todo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.todo.deadLine}
        </Card.Subtitle>
        <Card.Text>{props.todo.task}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
