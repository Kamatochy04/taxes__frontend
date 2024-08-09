import { NavLink } from "react-router-dom";

import accauntImg from "@/shared/assets/img/Accaunt_img.png";

import PaymentIcon from "@mui/icons-material/Payment";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import OutputOutlinedIcon from "@mui/icons-material/OutputOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import style from "./sideBar.module.scss";
import { useAppSelector } from "@/app/redux/hook";
import { useEffect, useState } from "react";

export const SideBar = () => {
  const isShow = useAppSelector((state) => state.SideBar.isShow);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const t = localStorage.getItem("accessToken");

    if (t) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, isAuth]);

  return isAuth ? (
    <>
      <div className={`${style.bar} ${isShow ? style.show : null}`}>
        <img src={accauntImg} alt="accaunt-img" className={style.bar__img} />
        <ul className={style.bar__list}>
          <NavLink
            to={"offers"}
            className={style.bar__item}
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            state={{ from: "Мои предложения" }}
          >
            <CardTravelIcon /> Мои предложения
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"finance"}
            className={style.bar__item}
            state={{ from: "Мои финансы" }}
          >
            <CurrencyExchangeIcon />
            Мои финансы
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"orders"}
            className={style.bar__item}
            state={{ from: "Текущие заказы" }}
          >
            <FactCheckOutlinedIcon />
            Текущие заказы
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"payment-methods"}
            className={style.bar__item}
            state={{ from: "Способы оплаты" }}
          >
            <PaymentIcon />
            Способы оплаты
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"basket"}
            className={style.bar__item}
            state={{ from: "Моя корзина" }}
          >
            <ShoppingCartOutlinedIcon />
            Моя корзина
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"purchases"}
            className={style.bar__item}
            state={{ from: "Мои покупки" }}
          >
            <SavingsOutlinedIcon />
            Мои покупки
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"account"}
            className={style.bar__item}
            state={{ from: "Моя учетная запись" }}
          >
            <AccountCircleOutlinedIcon />
            Моя учетная запись
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={"support"}
            className={style.bar__item}
            state={{ from: "Поддержка" }}
          >
            <ManageAccountsOutlinedIcon />
            Поддержка
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
            to={""}
            className={style.bar__item}
          >
            <OutputOutlinedIcon /> Выход
          </NavLink>
        </ul>
      </div>
    </>
  ) : null;
};
