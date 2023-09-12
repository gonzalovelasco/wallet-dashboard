import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type UserDto, type WalletDto } from "common";

export const api = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3003",
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getUser: builder.query<UserDto, void>({
      query: () => ({
        url: "/user",
      }),
    }),
    addWalletAddress: builder.mutation<void, { address: string }>({
      query: (body) => ({
        url: "/wallet",
        method: "POST",
        body,
      }),
    }),
    getWalletAddress: builder.query<string, { address: string }>({
      query: (address) => ({
        url: `/wallet/${address}`,
      }),
    }),
    getWalletAddresses: builder.query<WalletDto[], void>({
      query: () => ({
        url: "/wallet",
      }),
    }),
    ServerStatus: builder.query<{ message: string }, void>({
      query: () => ({
        url: "/",
      }),
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddWalletAddressMutation,
  useGetWalletAddressQuery,
  useGetWalletAddressesQuery,
  useServerStatusQuery,
} = api;
