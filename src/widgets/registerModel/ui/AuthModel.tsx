import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthForm } from "@/features/auth";
import { ClouseIcon } from "@/shared/assets/icons/ClouseIcon";
import { Nav } from "./Nav";

import style from "./registerModel.module.scss";
import { Dialog } from "@mui/material";

export const AuthModel = () => {
  const [step, setStep] = useState(0);
  const [titleText, setTitleText] = useState("Авторизация");

  const navigate = useNavigate();

  useEffect(() => {
    if (step === 0) {
      setTitleText("Авторизация");
    } else if (step === 1) {
      setTitleText("Восстановление пароля");
    } else if (step === 2) {
      setTitleText("Пароль отправлен на почту");
    }
  }, [step]);

  return (
    <Dialog open={true} className={style.model}>
      <div className={style.model__window}>
        <h1>{titleText}</h1>
        <AuthForm step={step} />
        <div className={style.model__clouse} onClick={() => navigate("/")}>
          <ClouseIcon />
        </div>

        {step === 0 ? <Nav onClick={() => setStep(1)} /> : null}
      </div>
    </Dialog>
  );
};
