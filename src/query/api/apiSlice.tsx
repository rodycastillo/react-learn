import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "tasks",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/tasks" }),
  endpoints: (builder) => ({
    getTasks: builder.query<any, any>({
      query: (name) => `${name}`,
    }),
  }),
});

export const {} = apiSlice;
