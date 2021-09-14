import TodoItem from "../TodoItem/TodoItem";

export const mapTodos = (todos) => {
  return todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
};
