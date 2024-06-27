import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SecondStep } from "./SecondStep";
import { FirstStep } from "./FirstStep";

import { useForm } from "react-hook-form";

interface AuthProps {
  step: number;
}

export const AuthForm = ({ step }: AuthProps) => {
  const [form, setForm] = useState<React.ReactNode>(null);
  const [buttonText, setButtonText] = useState("Войти");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 0) {
      setForm(<FirstStep />);
      setButtonText("Войти");
    } else if (step === 1) {
      setForm(<SecondStep />);
      setButtonText("Отправить");
    } else if (step === 2) {
      setForm(<></>);
      setButtonText("Ок");
    }
  }, [step]);

  const nextStep = useCallback(() => {
    step++;
  }, [step]);

  return <>{form}</>;
};
