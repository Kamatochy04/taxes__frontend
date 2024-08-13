import { Typography } from "../typography/Typography";
import { Link } from "react-router-dom";

import style from "./formVariant.module.scss";

export const FormVariant = () => {
  return (
    <div className={style.box}>
      <Typography variant="link-register" tag={"p"}>
        <Link to={"/register"}>Зарегистрироваться</Link>
      </Typography>
      <p className={style.or}>или</p>
      <Typography variant="link-register" tag={"p"}>
        <Link to={"forget-password"}> Забыли пароль?</Link>
      </Typography>
    </div>
  );
};
