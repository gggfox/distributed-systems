import { apiSlice } from "./api.slice";
import Comment from "../../types/comment";

export const commentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPostComments: builder.query<Comment[], string>({
      query: (postId) =>
        `${process.env.NEXT_PUBLIC_COMMENTS_URL}/posts/${postId}/comments`,
      providesTags: ["Comments"],
    }),
    createComment: builder.mutation({
      query: ({ comment, postId }: { comment: Comment; postId: string }) => ({
        url: `${process.env.NEXT_PUBLIC_COMMENTS_URL}/posts/${postId}/comments`,
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Posts"], //updates cache
    }),
  }),

  overrideExisting: false,
});

export const { useGetAllPostCommentsQuery, useCreateCommentMutation } =
  commentApiSlice;
