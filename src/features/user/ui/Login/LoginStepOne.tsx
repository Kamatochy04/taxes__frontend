import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { LoginStepOneType } from "@/model";
import { Input } from "@/shared/components/input/Input";
import { Loader } from "@/shared/components/loader/Loader";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { FormVariant } from "@/shared/components/formVariant/FormVariant";

import { useAuthUser } from "../../hook/useAuthUser";
import { validationSchema } from "../../helpers/validationSheme/LoginStepOneSheme";

import style from "./auth.module.scss";

export const LoginStepOne = () => {
  const { loginUser, errorMessage, isLoading } = useAuthUser();
  const navigate = useNavigate();
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
            <Typography variant={"h3"} tag={"h3"}>
              Авторизация
            </Typography>
            <div className={style.form__layout}>
              <Input name={"email"} type="email" placeholder="Email" />
              <Input name={"password"} type="password" placeholder="Пароль" />
              {errorMessage && (
                <p className={style.form_error}>{errorMessage}</p>
              )}
            </div>
            <div className={style.form__wrapper}>
              <Button
                variant={"register"}
                disabled={!isValid}
                onClick={() => navigate(-1)}
              >
                <Typography variant="button" tag={"p"}>
                  Назад
                </Typography>
              </Button>
              <Button variant={"register"} disabled={!isValid}>
                <Typography variant="button" tag={"p"}>
                  Далее
                </Typography>
              </Button>
            </div>

            <FormVariant />
          </Form>
        )}
      </Formik>
    </>
  );
};
