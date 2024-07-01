import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Box, Button, IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface FormData {
  code: string;
}

export const SecondStep = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();

  const onSubmit = () => {
    navigate("/");
  };

  function resetField(arg0: string) {
    throw new Error("Function not implemented.");
  }

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
        label={"code*"}
        {...register("code")}
        error={!!errors.code}
        helperText={errors.code?.message}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => {
                resetField("code");
              }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button sx={{ width: "100%" }} variant="contained" type="submit">
        Войти
      </Button>
    </Box>
    // <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
    //   <Controller
    //     name={"email"}
    //     control={control}
    //     rules={{
    //       required: "поле должно быть заполнено",
    //       pattern: {
    //         message: "Некоректные сиволы",
    //         value: /^\S+@\S+$/i,
    //       },
    //     }}
    //     render={({ field }) => (
    //       <>
    //         <Input
    //           placeholder={"email"}
    //           type={"text"}
    //           name="email"
    //           value={email}
    //           onChange={(event) => {
    //             field.onChange(event);
    //             setEmail(event.target.value);
    //           }}
    //         />
    //       </>
    //     )}
    //   />
    //   {errors.email?.message}

    //   {errors.password?.message}
    //   <Button children={"Войти"} type={"submit"} />
    // </form>
  );
};
