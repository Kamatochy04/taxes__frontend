import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Step4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          margin: "3rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography>Cпасибо! </Typography>
        <Typography>Регистрация прошла успешно! </Typography>
        <Typography>Для уточнения данных перейдите в профиль</Typography>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          Ок
        </Button>
      </Box>
    </>
  );
};
