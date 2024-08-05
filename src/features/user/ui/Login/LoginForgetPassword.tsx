import { Form, Formik } from "formik";

import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";

import * as yup from "yup";

import style from "./auth.module.scss";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email обязателен"),
});

export const LoginForgetPassword = () => {
  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, isSubmitting }) => (
          <>
            <Form className={style.box}>
              <Typography variant={"h3-register"} tag={"h3"}>
                Восстановление пароля
              </Typography>
              <Input name={"email"} type="email" placeholder="Email" />
            </Form>
            <Button
              variant={"register"}
              disabled={!isValid || !dirty || isSubmitting}
            >
              <Typography variant="button-register" tag={"p"}>
                Войти
              </Typography>
            </Button>
          </>
        )}
      </Formik>
    </>
  );
};
