import { Input } from "@/shared/components/input/Input";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import style from "./auth.module.scss";
import { Button } from "@/shared/components/button/Button";

interface FormData {
  email: string;
  password: string;
}

export const SecondStep = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm<FormData>();

  const onSubmit = () => {
    navigate("/");
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
            value: /^\S+@\S+$/i,
          },
        }}
        render={({ field }) => (
          <>
            <Input
              placeholder={"email"}
              type={"text"}
              name="email"
              value={email}
              onChange={(event) => {
                field.onChange(event);
                setEmail(event.target.value);
              }}
            />
          </>
        )}
      />
      {errors.email?.message}

      {errors.password?.message}
      <Button children={"Войти"} type={"submit"} />
    </form>
  );
};
