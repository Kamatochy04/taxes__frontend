import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Box, Button, IconButton, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
interface FormData {
  code: string;
}

export const SecondStep = () => {
  const navigate = useNavigate();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormData>();

  const onSubmit = () => {
    navigate("/");
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
        label={"code*"}
        {...register("code")}
        error={!!errors.code}
        helperText={errors.code?.message}
        InputProps={{
          endAdornment: (
            <IconButton onClick={() => {}}>
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
        Ок
      </Button>
    </Box>
  );
};
