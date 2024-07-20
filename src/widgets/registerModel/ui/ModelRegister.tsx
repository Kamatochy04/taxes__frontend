import { useState } from "react";

import { Step1, Step2, Step3 } from "@/features/signup";
import { Dialog } from "@mui/material";

import { Step4 } from "@/features/signup/ui/step4";
import { AuthFormHeader } from "@/shared/components/authFormHeader/AuthFormHeader";
import style from "./registerModel.module.scss";
import { Outlet } from "react-router-dom";

export const RegisterModel = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <Dialog open={true} className={style.model}>
<<<<<<< HEAD
      {step !== 4 && (
        <>
          {" "}
          <AuthFormHeader />
          <h1
            style={{
              margin: "0 auto",
              fontFamily: "Verdana",
            }}
          >
            Регистрация
          </h1>
        </>
      )}
      <Outlet />
      {step === 3 && <Step3 nextStep={nextStep} />}
      {step === 4 && <Step4 />}
=======
      <div className={style.model__window}>
        {step !== 4 && <AuthFormHeader />}
        <h1>Регистрация</h1>
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} />}
        {step === 3 && <Step3 nextStep={nextStep} />}
        {step === 4 && <Step4 />}
      </div>
>>>>>>> 8d7fed6bc8897cc30be3c7c7dd29ef422d97fa61
    </Dialog>
  );
};
