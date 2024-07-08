import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://84.38.182.213:1337",
  prepareHeaders: (headers, { getState }) => {
    headers.set("Origin", "http://localhost:5173/");
    return headers;
    // const token = getState() as RootState;

    // if (token) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
    // return headers;
  },
});

export const api = createApi({
  reducerPath: "spitApi",
  baseQuery,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
