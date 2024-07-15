import { useEffect, useState } from "react";

import { AuthForm } from "@/features/auth";
import { Nav } from "./Nav";

import { Dialog } from "@mui/material";
import { AuthFormHeader } from "@/shared/components/authFormHeader/AuthFormHeader";

import style from "./registerModel.module.scss";
export const AuthModel = () => {
  const [step, setStep] = useState(0);
  const [titleText, setTitleText] = useState("Авторизация");

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
        <AuthFormHeader />
        <h1>{titleText}</h1>
        <AuthForm step={step} />
        {step === 0 ? <Nav onClick={() => setStep(1)} /> : null}
      </div>
    </Dialog>
  );
};
