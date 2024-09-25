import { Heading } from "@chakra-ui/react";
import { TodoListItem } from "./TodoListItem";
import { Todo } from "@/types";

export const TodoList = () => {
  const todos: Todo[] = [];

  return (
    <>
      <Heading>Todo List</Heading>
      {todos.length > 0 && todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)}
    </>
  );
};
