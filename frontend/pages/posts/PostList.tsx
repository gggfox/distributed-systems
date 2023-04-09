import { Group, Stack, Text } from "@mantine/core";
import { useGetAllPostsQuery } from "../../store/posts.api.slice";
// import { Comment } from "../../store/comments.api.slice";
// import CommentList from "./CommentList";
import CommentListV2 from "./CommentListV2";
import CreateComment from "./CreateComment";

export default function PostList() {
  const {isLoading, isError, isSuccess, data, error} = useGetAllPostsQuery();

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
    {data?.map((post) => {
      return(
        <Stack key={post.id}
          sx={{ border: 'solid 2px', padding:'1rem'}}
        >
          <Text w="100%" align="center">{post.title}</Text>
         <CreateComment postId={post.id}/>
                  {/* <CommentList postId={todo.id ?? ""} /> */}
            <CommentListV2 comments={post.comments}/>
        </Stack>
      )
    })}
  </Stack>
)
}
