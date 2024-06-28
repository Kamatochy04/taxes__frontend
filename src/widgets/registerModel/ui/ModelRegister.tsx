import { useState } from "react";
import style from "./registerModel.module.scss";
import { Step1, Step2, Step3 } from "@/features/signup";
import { Dialog, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { Step4 } from "@/features/signup/ui/step4";

export const RegisterModel = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Dialog open={isOpen}>
        {step !== 4 && (
          <>
            {" "}
            <div className={style.model__nav}>
              <IconButton onClick={prevStep}>
                <ArrowBackIcon />{" "}
              </IconButton>
              <IconButton
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
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

        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} />}
        {step === 3 && <Step3 nextStep={nextStep} />}
        {step === 4 && <Step4 />}
      </Dialog>
    </>
  );
};
