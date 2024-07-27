import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/loginApi";
import { LoginStepOneType } from "@/model";

export const useAuthUser = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const loginUser = (data: LoginStepOneType) => {
    login(data)
      .unwrap()
      .then(() => {
        navigate("/login/status");
      });
  };

  return {
    loginUser,
  };
};
