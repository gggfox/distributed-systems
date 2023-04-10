import { Box, Stack, Text } from "@mantine/core";
import { useGetAllPostCommentsQuery } from "../../store/api/comments.api.slice";

interface Props {
  postId: string;
}

export default function CommentList({ postId }: Props) {
  const { isLoading, isError, isSuccess, data, error } =
    useGetAllPostCommentsQuery(postId);

  if (isLoading) {
    return <Text>'Loading...'</Text>;
  }

  if (isError) {
    console.log(error);
    return <p>error</p>;
  }

  if (isSuccess) {
    //console.log('success')
  }

  return (
    <Stack>
      {data?.map((comment) => {
        return <Box key={comment.id}>{comment.content}</Box>;
      })}
    </Stack>
  );
}
