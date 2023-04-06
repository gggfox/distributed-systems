import { apiSlice } from "./api.slice";

interface Post {
  id?: string;
  title: string;
}

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllPosts: builder.query<Post[],void>({
      query: () => ({
        url: 'http://localhost:3201/posts',
        method: 'GET',
      }),
      providesTags: ['Posts'],
    }),
    createPost: builder.mutation({
      query: (post: Post) => ({
        url: 'http://localhost:3201/posts',
        method: 'POST',
        body: post
      }),
      invalidatesTags:['Todos'] //updates cache
    })
  }),

  overrideExisting: false,
});

export const {
  useGetAllPostsQuery,
  useCreatePostMutation,
} = postApiSlice
