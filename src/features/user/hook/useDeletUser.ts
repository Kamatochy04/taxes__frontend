import { useNavigate } from "react-router-dom";
import { useSecretMutation } from "../api/AccountApi";
import { EnterWord } from "@/model";

export const useDeletUser = () => {
  const [sescret] = useSecretMutation();
  const navigate = useNavigate();

  const deletUser = (data: EnterWord) => {
    sescret(data)
      .unwrap()
      .then(() => {
        navigate("/delete-account/check-mail");
      });
  };

  return {
    deletUser,
  };
};
