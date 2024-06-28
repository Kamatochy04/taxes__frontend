import { useForm } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { ProgressBar } from "@/shared/components/progressbar/Progressbar";

type Step3Props = {
  nextStep: () => void;
};

export const Step3 = ({ nextStep }: Step3Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      code: undefined,
    },
  });
  const isFormValid = Object.keys(errors).length === 0;
  const onSubmit = (data: any) => {
    const confirm_code_id = localStorage.getItem("confirm_code_id");
    const code = data.code;

    fetch(`api/dev/confirm_code/${code}/${confirm_code_id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((date) => {
        localStorage.removeItem("confirm_code_id");
        console.log(date);
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
      <p>Шаг 3/3</p>
      <ProgressBar progress={100} />
      <p>Введите код, отправленый на e-mail</p>
      <TextField
        autoFocus
        {...register("code", { required: "Поле обязательно для заполнения" })}
        sx={{ width: "80%" }}
        label="Введите код"
        error={!!errors.code}
        helperText={errors.code?.message}
      />
      <Button
        sx={{ width: "80%" }}
        variant="contained"
        type="submit"
        disabled={!isFormValid}
      >
        Отправить
      </Button>
    </Box>
  );
};
