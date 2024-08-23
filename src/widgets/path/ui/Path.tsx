import style from "./path.module.scss";
import { useLocation, NavLink } from "react-router-dom";

export const Path = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <>
      <p className={style.link}>
        <NavLink to={"/"}>Главная страница/</NavLink> {state.from}/
      </p>
    </>
  );
};
