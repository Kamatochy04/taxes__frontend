import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { useNavigate } from "react-router-dom";

import { IConfirmCode, useSignupCodeMutation } from "../../api/userRegister";

import { Form, Formik } from "formik";

import style from "../Login/auth.module.scss";
import { Typography } from "@/shared/components/typography/Typography";
import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";

export const RegisterStepFour = () => {
  const navigate = useNavigate();
  const [signupCode] = useSignupCodeMutation();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm({
  //   mode: "onBlur",
  //   defaultValues: {
  //     code: undefined || "",
  //   },
  // });

  const onSubmit = (data: IConfirmCode) => {
    const confirm_code_id = localStorage.getItem("confirm_code_id");

    if (confirm_code_id) {
      data.confirm_code_id = confirm_code_id;
    }

    signupCode(data).then((response) => {
      if (response.error) {
        return console.log(response.error);
      }
      if (response.data) {
        localStorage.removeItem("confirm_code_id");
        localStorage.setItem("User", JSON.stringify(response.data));
        navigate("step-five");
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
