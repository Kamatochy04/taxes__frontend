import { Box, Button, Typography } from "@mui/material";

export const Step4 = () => {
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
        <Typography>Регистрация выполнена успешно</Typography>
        <Typography>Для уточнения данных перейдите в профиль</Typography>
        <Button>Ок</Button>
      </Box>
    </>
  );
};
