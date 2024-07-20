import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Nav } from "./Nav";

import { Dialog } from "@mui/material";
import { AuthFormHeader } from "@/shared/components/authFormHeader/AuthFormHeader";

import style from "./registerModel.module.scss";

export const AuthModel = () => {
  const [step, setStep] = useState(0);

  return (
    <Dialog open={true} className={style.model}>
      <div className={style.model__window}>
        <AuthFormHeader />
        <h1>Авторизация</h1>
        <Outlet />
        {step === 0 ? <Nav onClick={() => setStep(1)} /> : null}
      </div>
    </Dialog>
  );
};
