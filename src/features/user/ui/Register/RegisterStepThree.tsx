import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";

import style from "../Login/auth.module.scss";

export const RegisterStepThree = () => {
  const navigate = useNavigate();

  return (
    <div className={style.form}>
      <Typography variant="h3_center" tag={"h3"}>
        На электронную почту отправлен код. Пожалуйста, проверьте.
      </Typography>
      <Button
        onClick={() => {
          navigate("/register/step-fourth");
        }}
        variant="contained"
      >
        <Button variant={"register"}>
          <Typography tag={"p"}>Ввести код</Typography>
        </Button>
      </Button>
    </div>
  );
};
