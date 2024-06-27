import { useNavigate } from "react-router-dom";

import style from "./header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__container}>
          <div className={style.logo}>Logo</div>
          <input type="text" />
          <div className={style.login} onClick={() => navigate("/auth")}>
            Войти
          </div>
        </div>
      </div>
    </header>
  );
};
