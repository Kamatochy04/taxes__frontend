import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logoImg from "@/shared/assets/img/Logo.png";
import { Container } from "@/shared/components/container/Container";

import { useAppDispatch } from "@/app/redux/hook";
import { toggleSideBar } from "@/app/redux/sideBarSlice";
import { Loader } from "@/shared/components/loader/Loader";
import { useGetUserInfQuery } from "@/features/user/api/user.api";
import { CostomInput } from "@/shared/components/costomInput/CostomInput";

import style from "./header.module.scss";

export const Header = () => {
  const { data, isLoading } = useGetUserInfQuery();

  return (
    <>
      {isLoading && <Loader />}
      {data ? (
        <HeaderVariantTwo name={data.first_name} lastName={data.last_name} />
      ) : (
        <HeaderVariantOne />
      )}
    </>
  );
};

const HeaderVariantOne = () => {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__container_sec}>
          <div className={style.logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={style.header__wrapper_sec}>
            <CostomInput variant="header" />
          </div>

          <div className={style.header__login}>
            <ShoppingCartIcon />
            <div className={style.login} onClick={() => navigate("/login")}>
              Вход
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

const HeaderVariantTwo = ({
  name,
  lastName,
}: {
  name: string;
  lastName: string;
}) => {
  const [activeClass, setActiveClass] = useState<string>("burger__active");
  const dispathc = useAppDispatch();

  const toggleClass = () => {
    if (activeClass === "burger__active") {
      setActiveClass("");
    } else {
      setActiveClass("burger__active");
    }
    console.log(activeClass);
  };

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__container}>
          <div className={style.logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div
            className={`${style.burger} ${style[`burger__active`]}`}
            onClick={() => {
              dispathc(toggleSideBar());
              toggleClass();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={style.header__wrapper}>
            <CostomInput variant="header" />
          </div>
          <div className={style.header__login}>
            <ShoppingCartIcon />
            <div className={style.name}>
              {name} {lastName}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
