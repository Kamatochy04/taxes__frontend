import { useState } from "react";

import { Step1, Step2, Step3 } from "@/features/signup";
import { Dialog } from "@mui/material";

import { Step4 } from "@/features/signup/ui/step4";
import { AuthFormHeader } from "@/shared/components/authFormHeader/AuthFormHeader";
import style from "./registerModel.module.scss";
import { Outlet } from "react-router-dom";

export const RegisterModel = () => {
  // const [step, setStep] = useState(1);

  // const nextStep = () => {
  //   setStep(step + 1);
  // };

  return (
    <Dialog open={true} className={style.model}>
      {/* {step !== 4 && (
        <>
          {" "} */}
      <AuthFormHeader />
      {/* <h1
            style={{
              margin: "0 auto",
              fontFamily: "Verdana",
            }}
          >
            Регистрация
          </h1>
        </> */}
      {/* )} */}
      <Outlet />
      {/* {step === 3 && <Step3 />}
      {step === 4 && <Step4 />} */}
    </Dialog>
  );
};
