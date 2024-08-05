import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewHeadlineSharpIcon from "@mui/icons-material/ViewHeadlineSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import logoImg from "@/shared/assets/img/Logo.png";
import { Container } from "@/shared/components/container/Container";

import style from "./header.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { toggleSideBar } from "@/app/redux/sideBarSlice";
import { CostomInput } from "@/shared/components/costomInput/CostomInput";

export const Header = () => {
  const navigate = useNavigate();
  const dispathc = useAppDispatch();
  const state = useAppSelector((state) => state.SideBar.isShow);
  // const token = localStorage.getItem("accessToken");

  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__container}>
          <div className={style.logo}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={style.header__wrapper}>
            <div className={style.nav}>
              <LocationOnOutlinedIcon />
              <p>Минск</p>
            </div>
            <div className={style.catalog}>Каталог</div>
            <ViewHeadlineSharpIcon
              onClick={() => {
                dispathc(toggleSideBar());
              }}
              sx={{ color: "#fff", cursor: "pointer" }}
            />
          </div>
          <CostomInput variant="header" />
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
