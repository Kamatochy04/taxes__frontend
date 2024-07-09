import { useForm } from "react-hook-form";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppSelector } from "@/app/redux/hook";
import ClearIcon from "@mui/icons-material/Clear";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { PasswordRules } from "@/shared/validationRules/PasswordValodation";
import { EmailRules } from "@/shared/validationRules/EmailValidation";
import { NameRules } from "@/shared/validationRules/NameValidation";

type Step2Props = {
  nextStep: () => void;
};

interface IDataUser {
  email: string | "";
  password: string | "";
  repeat_password: string | "";
  secret_word: string | "";
}

export const Step2 = ({ nextStep }: Step2Props) => {
  const [vision, setVision] = useState(true);
  const passwordVision = useCallback(() => {
    setVision((prev) => !prev);
  }, []);

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors, isDirty },
  } = useForm<IDataUser>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      repeat_password: "",
      secret_word: "",
    },
  });

  const password = useRef({});
  password.current = watch("password", "");
  const isFormValid = Object.keys(errors).length === 0;
  const dataSekector = useAppSelector((state) => state.dataRegisterReducer);

  const onSubmit = (data: IDataUser) => {
    const dataUser = { ...dataSekector, ...data };
    fetch("api/dev/signup/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => response.json())
      .then((date) => {
        console.log;
        localStorage.setItem("dataUser", JSON.stringify(data));
        localStorage.setItem("confirm_code_id", date.confirm_code_id);
        nextStep();
      });
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "25vw",
        marginBottom: "3rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <p>Шаг 2/3</p>
      <ProgressBar progress={66.66} />
      <TextField
        sx={{ width: "80%" }}
        type="email"
        label={"Логин/Email"}
        {...register("email", { ...EmailRules() })}
        error={!!errors.email}
        helperText={errors.email?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("email");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <TextField
        sx={{ width: "80%" }}
        label={"Пароль"}
        type={vision ? "password" : "text"}
        {...register("password", {
          ...PasswordRules(),
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
              <IconButton
                onClick={() => {
                  resetField("password");
                }}
              >
                <ClearIcon />
              </IconButton>
            </>
          ),
        }}
      />
      <TextField
        sx={{ width: "80%" }}
        label={"Повторите пароль"}
        {...register("repeat_password", {
          validate: (value: string) => {
            return value === password.current || "Пароли не совпадают";
          },
          ...PasswordRules(),
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
              <IconButton
                onClick={() => {
                  resetField("repeat_password");
                }}
              >
                <ClearIcon />
              </IconButton>
            </>
          ),
        }}
      />
      <TextField
        sx={{ width: "80%" }}
        label={"Секретное слово"}
        {...register("secret_word", {
          ...NameRules(),
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
        sx={{ width: "80%" }}
        variant="contained"
        type="submit"
        disabled={!isDirty || !isFormValid}
      >
        Далее
      </Button>
    </Box>
  );
};
