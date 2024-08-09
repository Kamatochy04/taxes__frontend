import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://84.38.182.213:1337",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "spitApi",
  baseQuery,
  refetchOnMountOrArgChange: true, //позволяет принудительно перезагружать запрос при монтировании
  endpoints: () => ({}),
});
