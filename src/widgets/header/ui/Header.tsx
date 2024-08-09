import { useNavigate } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ViewHeadlineSharpIcon from "@mui/icons-material/ViewHeadlineSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import logoImg from "@/shared/assets/img/Logo.png";
import { Container } from "@/shared/components/container/Container";

import style from "./header.module.scss";
import { useAppDispatch } from "@/app/redux/hook";
import { toggleSideBar } from "@/app/redux/sideBarSlice";
import { CostomInput } from "@/shared/components/costomInput/CostomInput";
import { useGetUserInfQuery } from "@/features/user/api/user.api";
import { Loader } from "@/shared/components/loader/Loader";

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
  const dispathc = useAppDispatch();
  const navigate = useNavigate();

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

const HeaderVariantTwo = ({
  name,
  lastName,
}: {
  name: string;
  lastName: string;
}) => {
  const dispathc = useAppDispatch();

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
            <div className={style.name}>
              {name} {lastName}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
