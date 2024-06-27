import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";

import style from "./auth.module.scss";

interface FormData {
  email: string;
  password: string;
}

interface TokenResponse {
  access: string;
  refresh: string;
}

export const FirstStep = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("/api/dev/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const payload: TokenResponse = await response.json();
        localStorage.setItem("accessToken", payload.access);
        localStorage.setItem("refreshToken", payload.refresh);
        navigate("/");
      } else {
        console.error("Ошибка ответа:", response.status);
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={"email"}
        control={control}
        rules={{
          required: "поле должно быть заполнено",
          pattern: {
            message: "Некоректные сиволы",
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          },
        }}
        render={({ field }) => (
          <>
            <Input
              placeholder={"email"}
              type={"text"}
              name={field.name}
              value={field.value}
              onChange={field.onChange}
            />
          </>
        )}
      />
      {errors.email?.message}
      <Controller
        name={"password"}
        control={control}
        rules={{
          required: "поле должно быть заполнено",
          maxLength: {
            value: 8,
            message: "Пароль должне быть длиннее 8 символов ",
          },
          pattern: {
            message: "Пароль должен содержать хотя бы один спецсимвол", // Изменено сообщение
            value: /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/,
          },
        }}
        render={({ field }) => (
          <>
            <Input
              name={field.name}
              placeholder={"пароль"}
              type={"text"}
              value={field.value}
              onChange={field.onChange}
            />
          </>
        )}
      />

      {errors.password?.message}
      <Button children={"Войти"} type={"submit"} />
    </form>
  );
};
