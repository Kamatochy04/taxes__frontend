import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";

import style from "./auth.module.scss";

export const LoginStepTwo = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.box}>
        <Typography variant={"h3"} tag={"h3"}>
          Вход выполнен успешно!
        </Typography>
        <Button variant={"register"} onClick={() => navigate("/")}>
          <Typography variant="button" tag={"p"}>
            Далее
          </Typography>
        </Button>
      </div>
    </>
  );
};
