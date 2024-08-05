import { api } from "@/app/redux/services/api";

type ResponsData = {
  accessToken: string;
  refreshToken: string;
};

type TaxpayerData = {
  UNP: string;
  сategory: string;
};

type PassportData = {
  date: Date;
  series: string;
  number: string;
  registration: string;
};

type PersonalData = {
  first_name: string;
  last_name: string;
  patronymic: string;
  email: string;
  phone_number: string;
};

type Secret = {
  secret_word: string;
};

//Вызов injectEndpoints внедрит конечные точки в исходный API,
//но также вернет вам тот же API с правильными типами для этих конечных точек.
export const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    Taxpayer: builder.mutation<ResponsData, TaxpayerData>({
      query: (body: TaxpayerData) => ({
        url: "api/dev/",
        method: "POST",
        body,
      }),
    }),

    Passport: builder.mutation<ResponsData, PassportData>({
      query: (body: PassportData) => ({
        url: "api/dev/",
        method: "POST",
        body,
      }),
    }),

    Personal: builder.mutation<ResponsData, PersonalData>({
      query: (body: PersonalData) => ({
        url: "api/dev/",
        method: "POST",
        body,
      }),
    }),

    Secret: builder.mutation<ResponsData, Secret>({
      query: (_secret_word: Secret) => ({
        url: "api/dev/",
        method: "DELETE",
      }),
    }),

  }),
});

export const { useTaxpayerMutation, usePassportMutation, usePersonalMutation, useSecretMutation } = accountApi;

export const {
  endpoints: { Taxpayer, Passport, Personal, Secret },
} = accountApi;
