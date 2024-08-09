import { api } from "@/app/redux/services/api";

export interface IDataUser {
  first_name: string;
  last_name: string;
  patronymic?: string;
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

interface IResponsDataUser {
  confirm_code_id: string;
}

export const signupApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation<IResponsDataUser, IDataUser>({
      query: (userData) => ({
        url: "api/dev/signup/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignupMutation } = signupApi;

export const {
  endpoints: { signup },
} = signupApi;

export interface IConfirmCode {
  code: string;
  confirm_code_id?: string;
}

export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
}

export const signupCodeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signupCode: builder.mutation<IUser, IConfirmCode>({
      query: (data) => ({
        url: `api/dev/confirm_code/${data.code}/${data.confirm_code_id}/`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSignupCodeMutation } = signupCodeApi;

export const {
  endpoints: { signupCode },
} = signupCodeApi;
