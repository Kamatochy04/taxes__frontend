import { Link, useNavigate } from "react-router-dom";

import style from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  const onRegister = () => {
    navigate("/register");
  };

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <Link to={"/"} className={style.header__logo}>
          LOGO
        </Link>
        <div className={style.header__box}>
          <button onClick={onRegister}>Регисрация</button>
          <button onClick={onRegister}>Войти</button>
        </div>
      </div>
    </header>
  );
};
