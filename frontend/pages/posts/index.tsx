import { Stack } from "@mantine/core";
import { useGetAllPostsQuery } from "../../store/posts.api.slice";

export default function PostsPage() {
  const posts = useGetAllPostsQuery();
  console.log(posts)

  return <Stack>
  </Stack>
}
