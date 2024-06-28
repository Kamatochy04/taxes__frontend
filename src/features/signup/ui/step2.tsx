import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAppSelector } from "@/app/redux/hook";
import ClearIcon from "@mui/icons-material/Clear";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";

type Step2Props = {
  nextStep: () => void;
};

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
  } = useForm({
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

  const onSubmit = (data) => {
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
        localStorage.setItem("confirm_code_id", date.confirm_code_id);
      });
    nextStep();
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
        {...register("email", { required: "Поле обязательно для заполнения" })}
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
          required: "Поле обязательно для заполнения",
          pattern:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*[^\w!@#$%^&*()\-+;:,.<>]).{6,}$/,
          minLength: {
            value: 8,
            message:
              "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)",
          },
          maxLength: {
            value: 30,
            message:
              "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)",
          },
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
          required: "Поле обязательно для заполнения",
          minLength: {
            value: 8,
            message:
              "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)",
          },
          maxLength: {
            value: 30,
            message:
              "Пароль (8-30 символов) должен содержать буквы (a-z, A-Z), минимум 1 цифру, без трёх и более одинаковых символов и цифр подряд, и может включать спецсимволы (#@!$%^;&*()-_+:,.)",
          },
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
          required: "Поле обязательно для заполнения",
          pattern: /^[а-яА-ЯёЁ]+$/,
          maxLength: {
            value: 30,
            message: "Слово может содержать от 1 до 30 символов",
          },
          minLength: {
            value: 1,
            message: "Слово может содержать от 1 до 30 символов",
          },
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
