import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLoginMutation } from "../api/loginApi";

import { LoginStepOneType } from "@/model";

export const useAuthUser = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState();
  const navigate = useNavigate();

  const loginUser = (data: LoginStepOneType) => {
    login(data)
      .unwrap()
      .then((p) => {
        localStorage.setItem("accessToken", p.access);
        localStorage.setItem("refreshToken", p.refresh);
        navigate("/login/status");
      })
      .catch((error) => {
        setErrorMessage(error.data.detail);
      });
  };

  return {
    errorMessage,
    loginUser,
    isLoading,
  };
};