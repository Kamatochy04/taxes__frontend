import { api } from "@/app/redux/services/api";
import { UserData } from "@/model/userData/user";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserInf: builder.query<UserData, void>({
      query: () => "/api/dev/users/me/",
    }),
  }),
});

export const { useGetUserInfQuery } = userApi;

export const {
  endpoints: { getUserInf },
} = userApi;

export const {
  endpoints: { getUserInf },
} = userApi;