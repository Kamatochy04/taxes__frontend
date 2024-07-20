import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Step4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          minWidth: "416px",
          minHeight: "586px",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Typography>Cпасибо! </Typography>
        <Typography>Регистрация прошла успешно! </Typography>
        <Typography>Для уточнения данных перейдите в профиль</Typography>
        <Button
          // sx={{ width: "80%" }}
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
