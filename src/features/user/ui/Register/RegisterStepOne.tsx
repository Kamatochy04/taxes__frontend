import { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { DataRegisterUser, setFormData } from "@/app/redux/registerSlice";

import { validationSchema } from "../../helpers/validationSheme/LoginStepOneSheme";

import { Typography } from "@/shared/components/typography/Typography";
import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { Checkbox } from "@mui/material";

import style from "../Login/auth.module.scss";
export const RegisterStepOne = () => {
  const dispatch = useAppDispatch();
  const dataSelector = useAppSelector((state) => state.step1);
  const navigate = useNavigate();

  const onSubmit = (data: DataRegisterUser) => {
    dispatch(setFormData(data));
    navigate("step-second");
  };

  return (
    <Formik<DataRegisterUser>
      initialValues={{ first_name: "", last_name: "", patronymic: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={style.form}>
          <Typography
            variant={"h3-register"}
            tag={"h3"}
            className={style.form__title}
          >
            Регистрация
          </Typography>
          <ProgressBar progress={33.33} />
          <div className={style.form__layout}>
            <Input name={"first_name"} type="text" placeholder="Имя*" />
            <Input name={"last_name"} type="text" placeholder="Фамилия*" />
            <Input name={"last_name"} type="text" placeholder="Отчество" />
            <div style={{ display: "flex", alignItems: "center" }}>
              <Input required name={"checkbox"} type="checkbox" />
              <Typography variant={"check-box"} tag={"p"}>
                Согласие на обработку персональных данных
              </Typography>
            </div>
          </div>

          <div className={style.form__wrapper}>
            <Button
              variant={"register"}
              disabled={!isValid}
              className={style.form__btn}
              onClick={() => navigate(-1)}
            >
              <Typography variant="button-register" tag={"p"}>
                Назад
              </Typography>
            </Button>
            <Button
              variant={"register"}
              disabled={!isValid}
              className={style.form__btn}
            >
              <Typography variant="button-register" tag={"p"}>
                Далее
              </Typography>
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
