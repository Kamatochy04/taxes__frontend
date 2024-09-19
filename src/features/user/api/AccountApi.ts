import { api } from "@/app/redux/services/api";
import { EnterWord, AccountData, AvatarType } from "@/model/AccountData/AccountType"

type ResponsData = {
  accessToken: string;
  refreshToken: string;
};

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const accountApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetDataUser: builder.query<AccountData, string>({
      query: () => "api/dev/users/me/",
    }),

    GetUserMeProducts: builder.query<any, any>({
      query: () => "api/dev/users/me/products/",
    }),

    GetUserMeOrders: builder.query<any, any>({
      query: () => "api/dev/users/me/orders/",
    }),

    GetUserMeOrdersSum: builder.query<any, any>({
      query: () => "api/dev/users/me/orders/sum/",
    }),

    PatchDataUser: builder.mutation<AccountData, AccountData>({
      query: (body) => ({
        url: "api/dev/users/me/",
        method: "PATCH",
        body,
      }),
    }),

    AddAvatar: builder.mutation<any, any>({
      query: (body) => ({
        url: "api/dev/users/me/avatar/",
        method: "POST",
        body,
      }),
    }),

    deleteAvatar: builder.mutation({
      query: () => ({
        url: "api/dev/users/me/avatar/",
        method: "DELETE",
      }),
    }),

    Secret: builder.mutation<ResponsData, EnterWord>({
      query: (_secret_word: EnterWord) => ({
        url: "api/dev/users/me/",
        method: "DELETE",
      }),
    }),

  }),
});

export const { useGetDataUserQuery, usePatchDataUserMutation, useSecretMutation, useAddAvatarMutation, useDeleteAvatarMutation, useGetUserMeProductsQuery, useGetUserMeOrdersQuery, useGetUserMeOrdersSumQuery } = accountApi;

export const {
  endpoints: { PatchDataUser, Secret, },
} = accountApi;
