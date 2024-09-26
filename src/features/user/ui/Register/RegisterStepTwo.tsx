import * as yup from "yup";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";

import { useNavigate } from "react-router-dom";
import { set2FormData } from "@/app/redux/register2Slice";

import { Form, Formik } from "formik";

import style from "../Login/auth.module.scss";

import { Typography } from "@/shared/components/typography/Typography";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { Button } from "@/shared/components/button/Button";
import { Input } from "@/shared/components/input/Input";
import { Loader } from "@/shared/components/loader/Loader";

interface IDataForm2User {
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

export const validationSchema = yup.object().shape({
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
  repeat_password: yup
    .string()
    .required("Обязательное поле")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
  secret_word: yup
    .string()
    .required("Обязательное поле")
    .matches(/^[а-яА-ЯёЁ\s]+$/, "Допускаются только русские буквы и пробелы"),
});

export const RegisterStepTwo = () => {
  const [loading, setLoading] = useState(false);

  const dataSekector = useAppSelector((state) => state.step1);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (date: IDataForm2User) => {
    const dataUser = { ...dataSekector, ...date };
    dispatch(set2FormData(date));

    try {
      setLoading(true);
      const response = await fetch(
        "http://84.38.182.213:1337/api/dev/signup/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: dataUser.email,
            password: dataUser.password,
            first_name: dataUser.first_name,
            last_name: dataUser.last_name,
            patronymic: dataUser.patronymic,
            secret_word: dataUser.secret_word,
          }),
        }
      );

      response.json().then((p) => {
        console.log(p);
        localStorage.setItem("confirm_code_id", JSON.stringify(p));
        navigate("/register/step-third");
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <Formik<IDataForm2User>
        initialValues={{
          email: "",
          password: "",
          repeat_password: "",
          secret_word: "",
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className={style.form}>
            <Typography variant={"h3"} tag={"h3"} className={style.form__title}>
              Регистрация
            </Typography>

            <ProgressBar progress={66.66} />

            <div className={style.form__layout}>
              <Input name={"email"} type="text" placeholder="Почта*" />
              <Input name={"password"} type="password" placeholder="Пароль*" />
              <Input
                name={"repeat_password"}
                type="password"
                placeholder="Повторите пароль*"
              />
              <Input
                name={"secret_word"}
                type="text"
                placeholder="Секретное слово*"
              />
            </div>

            <div className={style.form__wrapper}>
              <Button
                variant={"register"}
                className={style.form__btn}
                onClick={() => navigate(-1)}
              >
                <Typography variant="button" tag={"p"}>
                  Назад
                </Typography>
              </Button>
              <Button
                variant={"register"}
                className={style.form__btn}
                type="submit"
              >
                <Typography variant="button" tag={"p"}>
                  Далее
                </Typography>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
