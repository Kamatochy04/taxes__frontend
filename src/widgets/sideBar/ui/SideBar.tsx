import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAppSelector } from "@/app/redux/hook";
import PaymentIcon from "@mui/icons-material/Payment";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import OutputOutlinedIcon from "@mui/icons-material/OutputOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

import accauntImg from "@/shared/assets/img/Accaunt_img.png";

import style from "./sideBar.module.scss";
import { RootState } from "@/app/redux/store";
import { useGetUserInfQuery } from "@/features/user/api/user.api";
import { useDispatch } from "react-redux";
import { setUserData } from "@/features/user/userData/userDataSlice";

export const SideBar = () => {
  const isShow = useAppSelector((state) => state.SideBar.isShow);

  const { data } = useGetUserInfQuery();
  const dispath = useDispatch();
  if (data !== undefined) {
    dispath(setUserData(data));
  };
  
  
  const ava = useAppSelector((state: RootState) => state.user.avatar);
  console.log(ava);
  let avatar = 'http://84.38.182.213:1337' + `${ava}`;
  console.log(avatar);

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [token, setToken] = useState<string | null>();
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      console.log("asdasfsafdsad");
      setToken(localStorage.getItem("accessToken")); // Обновление состояния при изменении localStorage
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const t = localStorage.getItem("accessToken");

    if (t) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, isAuth]);

  const exit = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

  return isAuth ? (
    <>
      <div className={`${style.bar} ${isShow ? style.show : null}`}>
        <img src={ava !== null ? avatar : accauntImg} alt="accaunt-img" className={style.bar__img} />
        <ul className={style.bar__list}>
          <NavLink
            to={"mySuggestions"}
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
          <p
            className={style.bar__item}
            onClick={() => {
              exit();
            }}
          >
            <OutputOutlinedIcon /> Выход
          </p>
        </ul>
      </div>
    </>
  ) : null;
};
