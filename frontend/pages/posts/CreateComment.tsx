import { Button, Group, TextInput } from "@mantine/core";
import { useRef } from "react";
import { useCreateCommentMutation } from "../../store/comments.api.slice";

interface Props {
  postId?: string;
}

export default function CreateComment({ postId }: Props) {
  const [createComment] = useCreateCommentMutation();
  const comment = useRef("");

  if (!postId) {
    return <></>;
  }
  return (
    <Group>
      <TextInput
        onChange={(value) => {
          comment.current = value.target.value;
        }}
      />
      <Button
        onClick={() =>
          createComment({
            comment: { content: comment.current, status: "pending" },
            postId,
          })
        }
      >
        add comment
      </Button>
    </Group>
  );
}
