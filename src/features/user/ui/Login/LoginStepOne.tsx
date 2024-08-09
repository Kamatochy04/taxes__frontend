import { Link } from "react-router-dom";
import { Form, Formik } from "formik";

import { Input } from "@/shared/components/input/Input";
import { Loader } from "@/shared/components/loader/Loader";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { LoginStepOneType } from "@/model";

import { useAuthUser } from "../../hook/useAuthUser";
import { validationSchema } from "../../helpers/validationSheme/LoginStepOneSheme";

import style from "./auth.module.scss";

export const LoginStepOne = () => {
  const { loginUser, errorMessage, isLoading } = useAuthUser();

  return (
    <>
      {isLoading && <Loader />}
      <Formik<LoginStepOneType>
        initialValues={{ email: "", password: "" }}
        onSubmit={loginUser}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form className={style.form}>
            <Typography variant={"h3-register"} tag={"h3"}>
              Авторизация
            </Typography>
            <Input name={"email"} type="email" placeholder="Email" />
            <Input name={"password"} type="password" placeholder="Пароль" />
            {errorMessage && <p className={style.form_error}>{errorMessage}</p>}
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
