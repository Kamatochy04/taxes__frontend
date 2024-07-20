import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://84.38.182.213:1337",
  prepareHeaders: (headers, { getState }) => {
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
