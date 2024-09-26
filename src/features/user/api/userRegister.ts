import { api } from "@/app/redux/services/api";
import { UserData } from "@/model/userData/user";

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
    getUser: builder.query<UserData, void>({
      query: () => ({ url: "api/dev/users/me/", method: "GET" }),
    }),
  }),
});

export const { useSignupCodeMutation, useGetUserQuery } = signupCodeApi;

export const {
  endpoints: { signupCode, getUser },
} = signupCodeApi;
