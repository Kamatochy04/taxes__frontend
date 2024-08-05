import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";

import style from "../Login/auth.module.scss";

export const DeletUserStepThree = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.box}>
        <Typography variant={"h3-register"} tag={"h3"}>
          Аккаунт успешно удалён
        </Typography>
        <Button variant={"register"} onClick={() => navigate("/")}>
          <Typography variant="button-register" tag={"p"}>
            Далее
          </Typography>
        </Button>
      </div>
    </>
  );
};
