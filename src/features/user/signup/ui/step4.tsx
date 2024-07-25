import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { useNavigate } from "react-router-dom";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import {
  IConfirmCode,
  useSignupCodeMutation,
} from "@/features/signup/api/signipHooks";

export const Step4 = () => {
  const navigate = useNavigate();
  const [signupCode] = useSignupCodeMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      code: undefined || "",
    },
  });
  // const isFormValid = Object.keys(errors).length === 0;
  const onSubmit: SubmitHandler<IConfirmCode> = (data) => {
    signupCode({ code: data.code }).then((response) => {
      if (response.error) {
        // Object.defineProperty(errors.code, "message", {
        //   value: response.error.data.details,
        // });

        // errors.code = response.error.data.details;
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
    <AuthBoxForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <p>Регистрация</p>
        <ProgressBar progress={100} />
        <p>Введите код, отправленный на e-mail</p>
        <TextField
          autoFocus
          {...register("code", { required: "Поле обязательно для заполнения" })}
          sx={{ width: "100%" }}
          placeholder="Введите код"
          error={!!errors.code}
          helperText={errors.code?.message}
        />
        <Button
          sx={{ width: "100%" }}
          variant="contained"
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </Button>
      </>
    </AuthBoxForm>
  );
};
