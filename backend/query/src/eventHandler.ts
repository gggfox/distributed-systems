import { posts } from "./routes";
import { Post, Comment } from "./types";

function handlePostCreated(data: any) {
  const { id, title } = data;
  const post: Post = { id, title, comments: [] };
  posts.set(id, post);
}

function handleCommentCreated(data: any) {
  const { id, content, postId, status } = data;
  if (!posts.has(postId)) {
    throw new Error("trying to add comment to non existing post");
  }
  const post: Post = posts.get(postId)!;
  const comment: Comment = { id, content, status };
  post?.comments.push(comment);
  posts.set(postId, post);
}

function handleCommentUpdated(data: any) {
  const { id, content, postId, status } = data;
  if (!posts.has(postId)) {
    throw new Error("trying to retrive a non existing post");
  }
  const post = posts.get(postId);
  const comments = post?.comments.map((comment) => {
    if (comment.id === id) {
      comment.status = status;
      comment.content = content;
    }
    return comment;
  });
  post!.comments = comments ?? [];
  posts.set(postId, post!);
}

export const eventHandler = new Map<string, (data: any) => void>();
eventHandler.set("PostCreated", handlePostCreated);
eventHandler.set("CommentCreated", handleCommentCreated);
eventHandler.set("CommentUpdated", handleCommentUpdated);
