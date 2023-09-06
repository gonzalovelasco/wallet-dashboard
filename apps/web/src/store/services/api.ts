import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    ServerStatus: builder.query<{ message: string }, void>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const { useServerStatusQuery } = api;
