import React, { useCallback, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import {
  DONE,
  IN_PROGRESS,
  TODO,
  URL,
} from "../../Config/ConfigurationConstants";
import useHttp from "../../hooks/useHttp";
import DoneTodos from "../Todos/DoneTodos/DoneTodos";
import InProgressTodos from "../Todos/InProgressTodos/InProgressTodos";
import TodoTodos from "../Todos/TodoTodos/TodoTodos";

const TodoListBoard = () => {
  const [todoTodos, setTodoTodos] = useState([]);
  const [inProgressTodos, setInProgressTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const arrangeTodos = useCallback((todos) => {
    const allTodos = new Map();
    todos.map((todo) => {
      const todoGroup = allTodos.get(todo.status);
      if (todoGroup !== undefined) {
        todoGroup.push(todo);
      } else {
        allTodos.set(todo.status, [todo]);
      }
      return allTodos;
    });
    setDoneTodos(allTodos.get(DONE));
    setInProgressTodos(allTodos.get(IN_PROGRESS));
    setTodoTodos(allTodos.get(TODO));
  }, []);
  const { error, isLoading, sendRequest: fetchTodos } = useHttp(arrangeTodos);

  useEffect(() => {
    fetchTodos({ url: URL, initParams: {} });
  }, [fetchTodos]);
  return (
    <Row>
      <TodoTodos todoTodos={todoTodos}></TodoTodos>
      <InProgressTodos inProgressTodos={inProgressTodos}></InProgressTodos>
      <DoneTodos doneTodos={doneTodos}></DoneTodos>
    </Row>
  );
};

export default TodoListBoard;
