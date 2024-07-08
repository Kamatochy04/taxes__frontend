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

export const SideBar = () => {
  return (
    <div className={style.bar}>
      <img src={accauntImg} alt="accaunt-img" className={style.bar__img} />
      <ul className={style.bar__list}>
        <NavLink
          to={"offers"}
          className={style.bar__item}
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
        >
          <CardTravelIcon /> Мои предложения
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"finance"}
          className={style.bar__item}
        >
          <CurrencyExchangeIcon />
          Мои финансы
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"orders"}
          className={style.bar__item}
        >
          <FactCheckOutlinedIcon />
          Текущие заказы
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"payment-methods"}
          className={style.bar__item}
        >
          <PaymentIcon />
          Способы оплаты
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"basket"}
          className={style.bar__item}
        >
          <ShoppingCartOutlinedIcon />
          Моя корзина
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"purchases"}
          className={style.bar__item}
        >
          <SavingsOutlinedIcon />
          Мои покупки
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={""}
          className={style.bar__item}
        >
          <AccountCircleOutlinedIcon />
          Моя учетная запись
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#fff" } : undefined)}
          to={"support"}
          className={style.bar__item}
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
  );
};
