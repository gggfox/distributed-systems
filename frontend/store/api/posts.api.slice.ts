import Post from "../../types/post";
import { apiSlice } from "./api.slice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query<Post[], void>({
      query: () => ({
        url: `http://localhost:${process.env.NEXT_PUBLIC_POSTS_QUERY_PORT}/posts`,
        method: "GET",
      }),
      providesTags: ["Posts"],
    }),
    createPost: builder.mutation({
      query: (post: Post) => ({
        url: `http://localhost:${process.env.NEXT_PUBLIC_POSTS_PORT}/posts`,
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"], //updates cache
    }),
  }),

  overrideExisting: false,
});

export const { useGetAllPostsQuery, useCreatePostMutation } = postApiSlice;