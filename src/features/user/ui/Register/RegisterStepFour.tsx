import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { useNavigate } from "react-router-dom";

import { IConfirmCode, useSignupCodeMutation } from "../../api/userRegister";

import { Form, Formik } from "formik";

import { Typography } from "@/shared/components/typography/Typography";
import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";

import style from "../Login/auth.module.scss";

export const RegisterStepFour = () => {
  const navigate = useNavigate();
  const [signupCode] = useSignupCodeMutation();

  const onSubmit = async (data: IConfirmCode) => {
    const Confirm_code_id = JSON.parse(
      localStorage.getItem("confirm_code_id")!
    );

    data.confirm_code_id = Confirm_code_id.confirm_code_id;
    console.log(Confirm_code_id);
    // console.log(data.confirm_code_id);
    // signupCode(data).then((e) => console.log(e));
    // try {
    //   const response = await fetch(
    //     `http://84.38.182.213:1337/api/dev/confirm_code/${data.code}/${data.confirm_code_id}/`,
    //     {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    // } catch (error) {}

    signupCode(data).then((response) => {
      if (response.error) {
        return console.log(response.error);
      }
      if (response.data) {
        localStorage.removeItem("confirm_code_id");
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("register/step-five");
      }
    });
  };

  return (
    <Formik<IConfirmCode>
      initialValues={{ code: "", confirm_code_id: "" }}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
    >
      {() => (
        <Form className={style.form}>
          <Typography variant={"h3"} tag={"h3"} className={style.form__title}>
            Регистрация
          </Typography>

          <ProgressBar progress={100} />

          <div className={style.form__layout}>
            <Input name={"code"} type="text" placeholder="Введите код" />
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
