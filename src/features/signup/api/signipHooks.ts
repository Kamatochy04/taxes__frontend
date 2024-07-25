import { api } from "@/app/redux/services/api";

interface IDataUser {
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
  code: number;
}

export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  patronymic: string;
}

const confirm_code_id = localStorage.getItem("confirm_code_id");

export const signupCodeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signupCode: builder.mutation<IUser, IConfirmCode>({
      query: (data) => ({
        url: `api/dev/confirm_code/${data.code}/${confirm_code_id}/`,
        method: "POST",
      }),
    }),
  }),
});

export const { useSignupCodeMutation } = signupCodeApi;

export const {
  endpoints: { signupCode },
} = signupCodeApi;
