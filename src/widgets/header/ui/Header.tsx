import { useNavigate } from "react-router-dom";

import logoImg from "@/shared/assets/img/Logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import style from "./header.module.scss";
import { TextField } from "@mui/material";

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  return (
    <header className={style.header}>
      <div className="container">
        {token ? (
          <div className={style.header__container}>
            <div className={style.logo}>
              <img src={logoImg} alt="logo" />
            </div>
            <TextField className={style.header__input} placeholder="Поиск" />
            <div className={style.header__box}>
              <ShoppingCartOutlinedIcon />
              <PhoneAndroidOutlinedIcon />
              <div className={style.login} onClick={() => {}}>
                Дмитрий Иванов
              </div>
            </div>
          </div>
        ) : (
          <div className={style.header__container}>
            <div className={style.logo}>
              <img src={logoImg} alt="logo" />
            </div>
            <TextField className={style.header__input} placeholder="Поиск" />
            <div className={style.login} onClick={() => navigate("/auth")}>
              Войти
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
