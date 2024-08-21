//import { useForm } from "react-hook-form";

import { useCallback, useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/redux/hook";

import { useNavigate } from "react-router-dom";
//import { set2FormData } from "@/app/redux/register2Slice";

import { useSignupMutation } from "../../api/userRegister";
import { Form, Formik } from "formik";

import style from "../Login/auth.module.scss";

import { Typography } from "@/shared/components/typography/Typography";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";

interface IDataForm2User {
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

export const RegisterStepTwo = () => {
  const [vision, setVision] = useState(true);
  const navigate = useNavigate();
  const [signup] = useSignupMutation();
  const passwordVision = useCallback(() => {
    setVision((prev) => !prev);
  }, []);

  const dataSelector = useAppSelector((store) => store.step2);

  // const {
  //   register,
  //   handleSubmit,
  //   resetField,
  //   watch,
  //   setValue,
  //   formState: { errors, isValid, isDirty },
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
  // const dataSekector = useAppSelector((state) => state.step1);
  // const dispatch = useAppDispatch();

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

  const onSubmit = (date: IDataForm2User) => {
    // const dataUser = { ...dataSekector, ...date };
    // dispatch(set2FormData(date));
    // signup(dataUser)
    //   .then((response) => {
    //     if (response.error) {
    //       return console.log(response.error);
    //     }
    //     if (response.data) {
    //       localStorage.setItem(
    //         "confirm_code_id",
    //         response.data.confirm_code_id
    //       );
    //       navigate("step-third");
    //     } else {
    //       alert("Пользватель с таким почтовым адресом уже зарегистрирован!");
    //     }
    //   })
    //   .catch(console.log);
    navigate("step-third");
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
      // validationSchema={validationSchema}
    >
      {() => (
        <Form className={style.form}>
          <Typography variant={"h3"} tag={"h3"} className={style.form__title}>
            Регистрация
          </Typography>

          <ProgressBar progress={66.66} />

          <div className={style.form__layout}>
            <Input name={"email"} type="text" placeholder="Почта*" />
            <Input name={"password"} type="text" placeholder="Пароль*" />
            <Input
              name={"repeat_password"}
              type="text"
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
    // <RegistrForm onSubmit={handleSubmit(onSubmit)}>
    //   <>
    //     <p>Регистрация</p>
    //     <ProgressBar progress={66.66} />
    //     <TextField
    //       sx={{ width: "100%" }}
    //       placeholder={"Email"}
    //       {...register("email", { ...EmailRulesReg() })}
    //       error={!!errors.email}
    //       helperText={errors.email?.message}
    //       InputProps={{
    //         endAdornment: (
    //           <IconButton
    //             onClick={() => {
    //               resetField("email");
    //               setValue("email", "");
    //             }}
    //           >
    //             <ClearIcon />
    //           </IconButton>
    //         ),
    //       }}
    //     />
    //     <TextField
    //       sx={{ width: "100%" }}
    //       placeholder={"Пароль"}
    //       type={vision ? "password" : "text"}
    //       {...register("password", {
    //         ...PasswordRulesReg(),
    //       })}
    //       error={!!errors.password}
    //       helperText={errors.password?.message}
    //       InputProps={{
    //         endAdornment: (
    //           <>
    //             {" "}
    //             <IconButton onClick={passwordVision}>
    //               {vision ? <Visibility /> : <VisibilityOff />}
    //             </IconButton>
    //           </>
    //         ),
    //       }}
    //     />
    //     <TextField
    //       sx={{ width: "100%" }}
    //       placeholder={"Повторите пароль"}
    //       {...register("repeat_password", {
    //         validate: (value: string) => {
    //           return value === password.current || "Пароли не совпадают";
    //         },
    //         ...PasswordRulesReg(),
    //       })}
    //       type={vision ? "password" : "text"}
    //       error={!!errors.repeat_password}
    //       helperText={errors.repeat_password?.message}
    //       InputProps={{
    //         endAdornment: (
    //           <>
    //             {" "}
    //             <IconButton onClick={passwordVision}>
    //               {vision ? <Visibility /> : <VisibilityOff />}
    //             </IconButton>
    //           </>
    //         ),
    //       }}
    //     />
    //     <TextField
    //       sx={{ width: "100%" }}
    //       placeholder={"Секретное слово"}
    //       {...register("secret_word", {
    //         ...SecretWordRules(),
    //       })}
    //       error={!!errors.secret_word}
    //       helperText={errors.secret_word?.message}
    //       InputProps={{
    //         endAdornment: (
    //           <IconButton
    //             onClick={() => {
    //               resetField("secret_word");
    //               setValue("secret_word", "");
    //             }}
    //           >
    //             <ClearIcon />
    //           </IconButton>
    //         ),
    //       }}
    //     />
    //     <Button
    //       sx={{ width: "100%" }}
    //       variant="contained"
    //       type="submit"
    //       disabled={!isValid || !isDirty}
    //     >
    //       Далее
    //     </Button>
    //   </>
    // </RegistrForm>
  );
};