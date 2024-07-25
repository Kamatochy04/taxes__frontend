import { useLoginMutation } from "../api/authApi";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/shared/components/input/Input";
import { Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";

import style from "./auth.module.scss";
interface FormData {
  email: string;
  password: string;
}

export const FirstStep = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate("/login/status");
      })
      .catch(console.log);
    // navigate("/login/status");
  };

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        // validationSchema={}
      >
        {() => (
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
            <Button variant={"register"}>
              <Typography variant="button-register" tag={"p"}>
                Войти
              </Typography>
            </Button>
            <div className={style.form__box}>
              <Typography variant="link-register" tag={"p"}>
                <Link to={"/register"}>Зарегистрироваться</Link>
              </Typography>
              <Typography variant="link-register" tag={"p"}>
                Забыли пароль?
              </Typography>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
