import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:${process.env.NEXT_PUBLIC_TODOS_PORT}`}),
  tagTypes: [ 'Posts', 'Todos', 'Comments'], // creates a cache names "Todos"
  endpoints: builder => ({})
})
