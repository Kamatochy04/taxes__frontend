import { useForm } from "react-hook-form";
import { Button, IconButton, TextField } from "@mui/material";
import { Button, IconButton, TextField } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import ClearIcon from "@mui/icons-material/Clear";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";

import { useNavigate } from "react-router-dom";
import { set2FormData } from "@/app/redux/register2Slice";
import { EmailRulesReg } from "@/shared/validationRules/EmailValidRulesRegistr";
import { PasswordRulesReg } from "@/shared/validationRules/PaswordValidRulesRegistr";
import { SecretWord } from "@/shared/validationRules/SecretWordValidRules";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { useSignupMutation } from "../api/signipHooks";

interface IDataForm2User {
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

export const Step2 = () => {
  const [vision, setVision] = useState(true);
  const navigate = useNavigate();
  const [signup] = useSignupMutation();
  const passwordVision = useCallback(() => {
    setVision((prev) => !prev);
  }, []);

  const dataSelector = useAppSelector((store) => store.step2);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors, isValid },
  } = useForm<IDataForm2User>({
    mode: "onBlur",
    defaultValues: {
      email: dataSelector.email || "",
      password: dataSelector.password || "",
      repeat_password: dataSelector.repeat_password || "",
      secret_word: dataSelector.secret_word || "",
    },
  });

  const password = useRef({});
  password.current = watch("password", "");
  // const isFormValid = Object.keys(errors).length === 0;
  const dataSekector = useAppSelector((state) => state.step1);
  const dispatch = useAppDispatch();

  const onSubmit = (date: IDataForm2User) => {
    const dataUser = { ...dataSekector, ...date };
    dispatch(set2FormData(date));
    signup(dataUser)
      .then((response) => {
        if (response.error) {
          return console.log(response.error);
        }

        if (response.data) {
          localStorage.setItem(
            "confirm_code_id",
            response.data.confirm_code_id
          );
          navigate("step-third");
        } else {
          alert("Пользватель с таким почтовым адресом уже зарегистрирован!");
        }
      })
      .catch(console.log);
  };

  return (
    <AuthBoxForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <p>Регистрация</p>
        <ProgressBar progress={66.66} />
        <TextField
          sx={{ width: "100%" }}
          placeholder={"Email"}
          {...register("email", { ...EmailRulesReg() })}
          error={!!errors.email}
          helperText={errors.email?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  if (dataSelector.email.length) {
                    resetField("email");
                    // register("email");
                  }
                  // resetField("email");
                }}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
        <TextField
          sx={{ width: "100%" }}
          placeholder={"Пароль"}
          type={vision ? "password" : "text"}
          {...register("password", {
            ...PasswordRulesReg(),
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          InputProps={{
            endAdornment: (
              <>
                {" "}
                <IconButton onClick={passwordVision}>
                  {vision ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </>
            ),
          }}
        />
        <TextField
          sx={{ width: "100%" }}
          placeholder={"Повторите пароль"}
          {...register("repeat_password", {
            validate: (value: string) => {
              return value === password.current || "Пароли не совпадают";
            },
            ...PasswordRulesReg(),
          })}
          type={vision ? "password" : "text"}
          error={!!errors.repeat_password}
          helperText={errors.repeat_password?.message}
          InputProps={{
            endAdornment: (
              <>
                {" "}
                <IconButton onClick={passwordVision}>
                  {vision ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </>
            ),
          }}
        />
        <TextField
          sx={{ width: "100%" }}
          placeholder={"Секретное слово"}
          {...register("secret_word", {
            ...SecretWord(),
          })}
          error={!!errors.secret_word}
          helperText={errors.secret_word?.message}
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  resetField("secret_word");
                }}
              >
                <ClearIcon />
              </IconButton>
            ),
          }}
        />
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          type="submit"
          disabled={!isValid}
        >
          Далее
        </Button>
      </>
    </AuthBoxForm>
  );
};
