import style from "./path.module.scss";
import { NavLink } from "react-router-dom";

export const Path = ({ path }: { path?: string }) => {
  return (
    <>
      <p className={style.link}>
        <NavLink to={"/"}>Главная страница/</NavLink> {path}
      </p>
    </>
  );
};
