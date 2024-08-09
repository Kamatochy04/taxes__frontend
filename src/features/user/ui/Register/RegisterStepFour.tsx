import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";
import { useNavigate } from "react-router-dom";
import RegistrForm from "@/shared/components/RegistrForm/RegistrForm";
import { IConfirmCode, useSignupCodeMutation } from "../../api/userRegister";
import Timer from "@/widgets/timer/Timer";
// import { SecretWordRules } from "@/shared/validationRules/SecretWordValidRules";
import { ConfirmCodeValidRules } from "@/shared/validationRules/ConfirmCodeValidRules";

export const RegisterStepFour = () => {
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
    <RegistrForm onSubmit={handleSubmit(onSubmit)}>
      <>
        <p>Регистрация</p>
        <ProgressBar progress={100} />
        <p>Введите код, отправленный на e-mail</p>
        <TextField
          autoFocus
          {...register("code", { ...ConfirmCodeValidRules() })}
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
        <Timer />
      </>
    </RegistrForm>
  );
};
