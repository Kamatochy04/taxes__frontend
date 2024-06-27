import { Link } from "react-router-dom";

import style from "./registerModel.module.scss";

interface NavProps {
  onClick: () => void;
}

export const Nav = ({ onClick }: NavProps) => {
  return (
    <>
      <div className={style.links}>
        <Link to={"/register"} className={style.links__item}>
          Зарегестрироваться
        </Link>
        <a className={style.links__item} onClick={onClick}>
          Забыл e-mail или пароль
        </a>
      </div>
    </>
  );
};
