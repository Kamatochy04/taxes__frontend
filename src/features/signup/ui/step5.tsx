import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../../shared/assets/img/easyTaxLogo.png";

export const Step5 = () => {
  const navigate = useNavigate();
  return (
    <AuthBoxForm>
      <>
        <img style={{ marginTop: "124px" }} src={logo} />
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "20px",
            color: "rgba(12, 16, 56, 1)",
          }}
        >
          Регистрация выполнена успешно
        </Typography>

        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "18px",
            color: "rgba(12, 16, 56, 1)",
          }}
        >
          Для уточнения данных перейдите в профиль
        </Typography>
        <Button
          sx={{ width: "100%" }}
          onClick={() => {
            navigate("/");
          }}
          variant="contained"
        >
          Ок
        </Button>
      </>
    </AuthBoxForm>
  );
};
