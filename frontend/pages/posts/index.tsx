import { Box, TextInput, Group, Button } from "@mantine/core";
import { useForm, hasLength } from "@mantine/form";
import PostList from "./PostList";
import { useCreatePostMutation } from "../../store/api/posts.api.slice";
import Post from "../../types/post";

export default function PostPage() {
  const [createPost] = useCreatePostMutation();
  const form = useForm({
    initialValues: {
      title: "",
    } as Post,

    validate: {
      title: hasLength(
        { min: 2, max: 20 },
        "title must be between 2-10 characters"
      ),
    },
  });

  function handleSubmit(values: Post) {
    console.log(values);
    createPost(values);
  }

  return (
    <Box maw="60%" mx="auto">
      <form onSubmit={form.onSubmit((values: Post) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Post Create"
          placeholder="title"
          {...form.getInputProps("title")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
      <PostList />
    </Box>
  );
}
