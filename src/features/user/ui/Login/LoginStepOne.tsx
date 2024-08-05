import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { LoginStepOneType } from "@/model";

import { useAuthUser } from "../../hook/useAuthUser";

import style from "./auth.module.scss";

import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(8, "Пароль должен быть не менее 8 символов")
    .max(30, "Пароль должен быть не больше 30 символов")
    .test(
      "no-repeating-chars",
      "Пароль не может содержать один и тот же символ три раза подряд",
      function (value) {
        if (!value) return true;
        for (let i = 0; i < value.length - 3; i++) {
          if (value[i] === value[i + 1] && value[i] === value[i + 2]) {
            return false;
          }
        }
        return true;
      }
    ),
});

export const LoginStepOne = () => {
  const { loginUser } = useAuthUser();

  return (
    <>
      <Formik<LoginStepOneType>
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <Form className={style.form}>
            <Typography variant={"h3-register"} tag={"h3"}>
              Авторизация
            </Typography>
            <Input name={"email"} type="email" placeholder="Email" />
            <Input name={"password"} type="password" placeholder="Пароль" />
            <Button
              variant={"register"}
              disabled={!isValid || !dirty || isSubmitting}
            >
              <Typography variant="button-register" tag={"p"}>
                Войти
              </Typography>
            </Button>
            <div className={style.form__box}>
              <Typography variant="link-register" tag={"p"}>
                <Link to={"/register"}>Зарегистрироваться</Link>
              </Typography>
              <Typography variant="link-register" tag={"p"}>
                <Link to={"forget-password"}> Забыли пароль?</Link>
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
