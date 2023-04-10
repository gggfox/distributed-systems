import { Button, Checkbox, Group, Stack, Text } from "@mantine/core";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "../../store/api/todo.api.slice";

export default function TodoList() {
  const todoList = useGetTodosQuery();
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  if (todoList.isLoading) {
    return <Text>'Loading...'</Text>;
  }

  if (todoList.isError) {
    console.log(todoList.error);
    return <p>error</p>;
  }

  if (todoList.isSuccess) {
    //console.log('success')
  }

  return (
    <Stack>
      {todoList?.data?.map((todo) => {
        return (
          <Group key={todo.id} position="apart">
            <Checkbox
              checked={todo.done}
              onChange={() => updateTodo({ ...todo, done: !todo.done })}
            />
            <Text>{todo.title}</Text>
            <Button onClick={() => deleteTodo({ id: todo.id })}>delete</Button>
          </Group>
        );
      })}
    </Stack>
  );
}
