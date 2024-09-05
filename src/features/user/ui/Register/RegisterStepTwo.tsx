import { useForm } from "react-hook-form";

import { useCallback, useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";

import { useNavigate } from "react-router-dom";
import { set2FormData } from "@/app/redux/register2Slice";

// import { useSignupMutation } from "../../api/userRegister";
import { Form, Formik } from "formik";

import style from "../Login/auth.module.scss";

import { Typography } from "@/shared/components/typography/Typography";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { Button } from "@/shared/components/button/Button";
import { validationSchema } from "../../helpers/validationSheme/LoginStepOneSheme";
import { Input } from "@/shared/components/input/Input";

interface IDataForm2User {
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

export const RegisterStepTwo = () => {
  const [vision, setVision] = useState(true);
  const navigate = useNavigate();
  // const [signup] = useSignupMutation();
  // const passwordVision = useCallback(() => {
  //   setVision((prev) => !prev);
  // }, []);

  const dataSelector = useAppSelector((store) => store.step2);

  // const {
  //   watch,
  //   setValue,
  //   formState: {},
  // } = useForm<IDataForm2User>({
  //   mode: "onBlur",
  //   defaultValues: {
  //     email: dataSelector.email,
  //     password: dataSelector.password,
  //     repeat_password: dataSelector.repeat_password,
  //     secret_word: dataSelector.secret_word,
  //   },
  // });

  // const password = useRef({});
  // password.current = watch("password", "");
  const dataSekector = useAppSelector((state) => state.step1);
  const dispatch = useAppDispatch();

  // const valuePassword = watch("password");
  // const valueRepeatPassword = watch("password");

  // useEffect(() => {
  //   if (valuePassword.length > 30) {
  //     setValue("password", valuePassword.substring(0, 30));
  //   }
  //   if (valueRepeatPassword.length > 30) {
  //     setValue("repeat_password", valueRepeatPassword.substring(0, 30));
  //   }
  // }, [valuePassword, valueRepeatPassword]);

  const onSubmit = async (date: IDataForm2User) => {
    const dataUser = { ...dataSekector, ...date };
    console.log(dataUser);
    dispatch(set2FormData(date));

    try {
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
      console.log();
      response.json().then((p) => {
        localStorage.setItem("confirm_code_id", JSON.stringify(p));
        navigate("/register/step-third");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
  );
};
