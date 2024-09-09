import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { DataRegisterUser, setFormData } from "@/app/redux/registerSlice";

import { Typography } from "@/shared/components/typography/Typography";
import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";

import { Checkbox } from "@/shared/components/checkbox/Checkbox";

import style from "../Login/auth.module.scss";

import * as yup from "yup";

export const validationSchema = yup.object().shape({
  first_name: yup.string().required("Обязательное поле"),
  last_name: yup.string().required("Обязательное поле"),
  patronymic: yup.string().required("Обязательное поле"),
});

export const RegisterStepOne = () => {
  const dispatch = useAppDispatch();
  const dataSelector = useAppSelector((state) => state.step1);
  const navigate = useNavigate();

  const onSubmit = (data: DataRegisterUser) => {
    console.log(data);
    dispatch(setFormData(data));
    navigate("step-second");
  };

  return (
    <Formik<DataRegisterUser>
      initialValues={{ first_name: "", last_name: "", patronymic: "" }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={style.form}>
          <Typography variant={"h3"} tag={"h3"} className={style.form__title}>
            Регистрация
          </Typography>

          <ProgressBar progress={33.33} />

          <div className={style.form__layout}>
            <Input name={"first_name"} type="text" placeholder="Имя*" />
            <Input name={"last_name"} type="text" placeholder="Фамилия*" />
            <Input name={"patronymic"} type="text" placeholder="Отчество" />
            <Checkbox required={true}>
              <Typography tag={"p"}>
                <a
                  href="http://84.38.182.213:1437/Agreement"
                  target="_blank"
                  style={{ color: "#000", fontSize: "13px" }}
                >
                  Согласие на обработку персональных данных
                </a>
              </Typography>
            </Checkbox>
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
