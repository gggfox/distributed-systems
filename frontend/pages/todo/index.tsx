import { Box, TextInput, Group, Button, Switch, Space } from "@mantine/core";
import { useForm, hasLength } from "@mantine/form";
import { usePostTodoMutation } from "../../store/api/todo.api.slice";
import { Todo } from "../../types/todo";
import TodoList from "./TodoList";

export default function PostPage() {
  const [postTodo] = usePostTodoMutation();

  const form = useForm({
    initialValues: {
      done: false,
      title: "",
    },
    validate: {
      title: hasLength(
        { min: 2, max: 10 },
        "title must be between 2-10 characters"
      ),
    },
  });

  function handleSubmit(values: Todo) {
    console.log(values);
    postTodo(values);
  }

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values: Todo) => handleSubmit(values))}>
        <Group noWrap position="apart">
          <Switch
            label="done"
            {...form.getInputProps("done", { type: "checkbox" })}
          />
          <TextInput
            withAsterisk
            label="Title"
            placeholder="title"
            {...form.getInputProps("title")}
          />

          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <Space h="xl" />
      <TodoList />
    </Box>
  );
}
