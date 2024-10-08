import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logoImg from "@/shared/assets/img/Logo.png";
import { Container } from "@/shared/components/container/Container";

import { useAppDispatch } from "@/app/redux/hook";
import { toggleSideBar } from "@/app/redux/sideBarSlice";

import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

import style from "./header.module.scss";
import { CostomInput } from "@/shared/components/costomInput/CostomInput";

export const Header = () => {
  const first_name = useSelector((state: RootState) => state.user.first_name);
  const last_name = useSelector((state: RootState) => state.user.last_name);

  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <>
      {first_name && last_name ? (
        <HeaderVariantTwo
          count={count}
          name={first_name}
          lastName={last_name}
        />
      ) : (
        <HeaderVariantOne count={count} />
      )}
    </>
  );
};

const HeaderVariantOne = ({ count }: { count: number }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const t = localStorage.getItem("accessToken");

    if (t) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, isAuth]);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__container_sec}>
          <div className={style.logo}>
            <NavLink to={"/"}>
              <img src={logoImg} alt="logo" />
            </NavLink>
          </div>
          <div className={style.header__wrapper_sec}>
            <CostomInput variant="header" />
          </div>

          <div className={style.header__login}>
            <div
              className={style.box}
              onClick={() => (isAuth ? navigate("/basket") : "")}
            >
              {count > 0 ? <div className={style.price}>{count}</div> : null}
              <ShoppingCartIcon />
            </div>

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
  count,
}: {
  name?: string;
  lastName?: string;
  count: number;
}) => {
  const [activeClass, setActiveClass] = useState<string>("burger__active");
  const dispathc = useAppDispatch();
  const navigate = useNavigate();

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
            <NavLink to={"/"}>
              <img src={logoImg} alt="logo" />
            </NavLink>
          </div>
          <div
            className={`${style.burger} ${style[`burger__active`]}`}
            onClick={() => {
              console.log("123123");
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
            {count > 0 ? <div className={style.price}>{count}</div> : null}

            <div className={style.box} onClick={() => navigate("/basket")}>
              {count > 0 ? <div className={style.price}>{count}</div> : null}
              <ShoppingCartIcon />
            </div>
            <div className={style.name}>
              {name} {lastName}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
