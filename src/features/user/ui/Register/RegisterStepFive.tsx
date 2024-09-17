import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "@/shared/assets/img/easyTaxLogo.png";
import RegistrForm from "@/shared/components/RegistrForm/RegistrForm";
import { useGetUserInfQuery } from "../../api/user.api";
import { useDispatch } from "react-redux";
import { setUserData } from "../../userData/userDataSlice";
import { useEffect } from "react";

export const RegisterStepFive = () => {
  const navigate = useNavigate();
  const { data } = useGetUserInfQuery();
  const dispath = useDispatch();

  useEffect(() => {
    if (data) {
      console.log("step-five" + data);
      dispath(setUserData(data));
    }
  });
  return (
    <RegistrForm>
      <>
        <img src={logo} />
        <Typography
          sx={{
            marginTop: "36px",
            fontWeight: "500",
            fontSize: "20px",
            color: "rgba(12, 16, 56, 1)",
          }}
        >
          Спасибо!
        </Typography>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "20px",
            color: "rgba(12, 16, 56, 1)",
          }}
        >
          Регистрация выполнена успешно
        </Typography>

        <p
          style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "rgba(12, 16, 56, 1)",
            textAlign: "center",
          }}
        >
          Для уточнения личных данных <br /> перейдите в профиль
        </p>
        <Button
          sx={{ width: "100%" }}
          onClick={() => {
            if (data) {
              dispath(setUserData(data));
            }
            navigate("/");
          }}
          variant="contained"
        >
          Ок
        </Button>
      </>
    </RegistrForm>
  );
};
