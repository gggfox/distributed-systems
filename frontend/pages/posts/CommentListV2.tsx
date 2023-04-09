import { Box, Stack } from "@mantine/core";
import Comment from "../../types/comment"

interface Props {
  comments: Comment[];
}

export default function CommentListV2({comments}:Props){
  return (
  <Stack>
    {comments?.map((comment) => {
      return(<Box key={comment.id}>{comment.content}</Box>)
          })
    }
  </Stack>)
}
