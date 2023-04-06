import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Todo } from "../types/todo"
import { apiSlice } from "./api.slice"

export const todosApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => '/todos',
      providesTags: ['Todos'] // fills cache
    }),
    postTodo: builder.mutation({
      query: (todo: Todo) => ({
        url: '/todo',
        method: 'POST',
        body: todo
      }),
      invalidatesTags:['Todos'] //updates cache
    }),
    updateTodo: builder.mutation({
      query: (todo: Todo) => ({
        url: '/todo',
        method: 'PATCH',
        body: todo
      }),
      invalidatesTags:['Todos']
    }),
    deleteTodo: builder.mutation({
      query: ({id}) => ({
        url: `/todo/${id}`,
        method: 'DELETE',
        body: id
      }),
      invalidatesTags:['Todos'] //updates cache
    })
  })
})

export const{
  useGetTodosQuery,
  usePostTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApiSlice
