import { api } from "@/app/redux/services/api";

type ResponsData = {
  access: string;
  refresh: string;
};

type UserData = {
  password: string;
  email: string;
};

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponsData, UserData>({
      query: (userData) => ({
        url: "api/dev/token/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;

export const {
  endpoints: { login },
} = authApi;