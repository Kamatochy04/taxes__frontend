import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { LoginStepOneType } from "@/model";

import { useAuthUser } from "../../hook/useAuthUser";

import style from "./auth.module.scss";

export const LoginStepOne = () => {
  const { loginUser } = useAuthUser();

  return (
    <>
      <Formik<LoginStepOneType>
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
      >
        {({ isValid }) => (
          <Form className={style.form}>
            <Typography variant={"h3-register"} tag={"h3"}>
              Авторизация
            </Typography>
            <Input name={"email"} type="email" placeholder="Введите эл.почт" />
            <Input
              name={"password"}
              type="password"
              placeholder="Введите пароль"
            />
            <Button variant={"register"} disabled={!isValid}>
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
