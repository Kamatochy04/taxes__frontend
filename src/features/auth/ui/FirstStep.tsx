import { SubmitHandler, useForm } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import { Button, IconButton, TextField } from "@mui/material";
import { EmailRules } from "@/shared/validationRules/EmailValidation";
import { useLoginMutation } from "../api/authApi";
import { PasswordRules } from "@/shared/validationRules/PasswordValidation";
import { useNavigate } from "react-router-dom";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";

interface FormData {
  email: string;
  password: string;
}

export const FirstStep = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();
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
    // login(data).unwrap().then(console.log).catch(console.log);
    navigate("step-third");
  };

  return (
    <AuthBoxForm onSubmit={handleSubmit(onSubmit)}>
      <>
        {" "}
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
        <Button
          sx={{
            width: "100%",
            background: "#0C1038",
            padding: "15px 0",
            borderRadius: "8px",
            marginTop: "20px",
          }}
          variant="contained"
          type="submit"
        >
          Далее
        </Button>
      </>
    </AuthBoxForm>
  );
};
