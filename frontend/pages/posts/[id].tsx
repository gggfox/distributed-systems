import { Box, TextInput, Group, Button } from "@mantine/core";
import { useForm, hasLength } from "@mantine/form";

interface Post {
  title: string;
}

export default function PostPage() {

  const form = useForm({
    initialValues: {
      title: '',
    },

    validate: {
      title: hasLength({ min: 2, max: 10 }, 'title must be between 2-10 characters'),
    },
  });

  function handleSubmit(values:Post) {
    console.log(values)
  }

  return (
  <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit((values: Post) => handleSubmit(values))}>
        <TextInput
          withAsterisk
          label="Post Create"
          placeholder="title"
          {...form.getInputProps('title')}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>)
}
