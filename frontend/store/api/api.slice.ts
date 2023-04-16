import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_TODOS_URL }),
  tagTypes: ["Posts", "Todos", "Comments"], // creates a cache names "Todos"
  endpoints: (builder) => ({}),
});
