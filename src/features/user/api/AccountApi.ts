import { api } from "@/app/redux/services/api";
import { TaxpayerType, PassportType, PersonalType, EnterWord, PhotoType, AccountData } from "@/model/AccountData/AccountType"

type ResponsData = {
  accessToken: string;
  refreshToken: string;
};

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const accountApi = api.injectEndpoints({  
  endpoints: (builder) => ({

    GetDataUser: builder.query<AccountData, string>({
      query: () => "api/dev/users/me",
    }),

    Taxpayer: builder.mutation<ResponsData, TaxpayerType>({
      query: (body: TaxpayerType) => ({
        url: "api/dev/users/me/",
        method: "PATCH",
        body,
      }),
    }),

    Passport: builder.mutation<ResponsData, PassportType>({
      query: (body: PassportType) => ({
        url: "api/dev/users/me/",
        method: "PATCH",
        body,
      }),
    }),

    Personal: builder.mutation<ResponsData, PersonalType>({
      query: (body: PersonalType) => ({
        url: "api/dev/users/me/",
        method: "PATCH",
        body,
      }),
    }),

    Photo: builder.mutation<ResponsData, PhotoType>({
      query: (body: PhotoType) => ({
        url: "api/dev/users/me/avatar/",
        method: "POST",
        body,
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

export const { useGetDataUserQuery, useTaxpayerMutation, usePassportMutation, usePersonalMutation, useSecretMutation, usePhotoMutation } = accountApi;

export const {
  endpoints: { Taxpayer, Passport, Personal, Secret,  },
} = accountApi;
