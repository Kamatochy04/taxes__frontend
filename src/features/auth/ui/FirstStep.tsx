import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import ClearIcon from "@mui/icons-material/Clear";
import { Box, Button, IconButton, TextField } from "@mui/material";

import { EmailRules } from "@/shared/validationRules/EmailValidation";
import { PasswordRules } from "@/shared/validationRules/PasswordValodation";
import { useLoginMutation } from "../api/authApi";

interface FormData {
  email: string;
  password: string;
}

interface TokenResponse {
  access: string;
  refresh: string;
}

export const FirstStep = () => {
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const {
    formState: { errors },
    handleSubmit,
    register,
    resetField,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch("api/dev/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const payload: TokenResponse = await response.json();
        localStorage.setItem("accessToken", payload.access);
        localStorage.setItem("refreshToken", payload.refresh);
        navigate("/");
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "100%",
        marginBottom: "3rem",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1.5rem",
      }}
    >
      <TextField
        sx={{ width: "100%" }}
        label={"email*"}
        {...register("email", {
          ...EmailRules(),
        })}
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
        sx={{ width: "100%" }}
        label={"password*"}
        {...register("password", { ...PasswordRules() })}
        error={!!errors.password}
        helperText={errors.password?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("password");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button sx={{ width: "100%" }} variant="contained" type="submit">
        Далее
      </Button>
    </Box>
  );
};
