import { Box, Button, Checkbox, Flex, Group, Stack, Text, TextInput } from "@mantine/core";
import { useGetAllPostsQuery } from "../../store/posts.api.slice";
import { useRef } from "react";
import { useCreateCommentMutation, useGetAllPostCommentsQuery } from "../../store/comments.api.slice";
import { Comment } from "../../store/comments.api.slice";
import CommentList from "./CommentList";

export default function PostList() {
  const {isLoading, isError, isSuccess, data, error} = useGetAllPostsQuery();
  const [createComment] = useCreateCommentMutation();
  const comment = useRef("")

  if(isLoading) {
    return <Text>'Loading...'</Text>
  }

  if (isError) {
    console.log(error)
    return <p>error</p>
  }

  if(isSuccess) {
    //console.log('success')
  }

  return (
  <Stack w='100%'>
    {data?.map((todo) => {
      return(
        <Group key={todo.id}
          position="center"
          sx={{ border: 'solid 2px', padding:'1rem'}}
        >
          <Text w="100%" align="center">{todo.title}</Text>
          <TextInput onChange={(value) => {comment.current = value.target.value}}/>
          <Button onClick={() => createComment({comment: {title: comment.current}, postId: todo.id ?? "no-id"})}>add comment</Button>
                  <CommentList postId={todo.id ?? ""} />

        </Group>
      )
    })}
  </Stack>
)
}
