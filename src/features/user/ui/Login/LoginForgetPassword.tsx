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
        {({ isValid }) => (
          <>
            <Form className={style.form}>
              <Typography variant={"h3"} tag={"h3"}>
                Восстановление пароля
              </Typography>
              <Input name={"email"} type="email" placeholder="Email" />
              <div className={style.form__wrapper}>
                <Button variant={"register"} disabled={!isValid}>
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
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};
