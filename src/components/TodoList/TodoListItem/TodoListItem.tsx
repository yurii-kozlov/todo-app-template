'use client';

import { Button, Input, Flex, Checkbox } from "@chakra-ui/react";
import { Todo } from "@/types";
import { FC } from "react";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo }) => {
  const { text } = todo;

  return (
    <Flex pt={2}>
      <Checkbox />
      <Input mx={2} value={text} />
      <Button>Delete</Button>
    </Flex>
  );
};
