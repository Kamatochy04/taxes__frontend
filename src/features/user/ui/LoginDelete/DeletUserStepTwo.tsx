import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";

import style from "../Login/auth.module.scss";

export const DeletUserStepTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.box}>
        <Typography variant={"h3-login_delete"} tag={"h3"}>
          Удаление аккаунта
        </Typography>
        <Typography variant={"h4-login_delete"} tag={"h4"}>
          Подтверждение удаления аккаунта выслано на email
        </Typography>
        <Typography variant={"h4-login_delete"} tag={"h4"}>
          Проверьте email
        </Typography>
        <Button
          variant={"bigBlue"}
          onClick={() => navigate("/delete-account/status")}
        >
          Далее
        </Button>
      </div>
    </>
  );
};
