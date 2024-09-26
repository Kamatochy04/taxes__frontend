import { useNavigate } from "react-router-dom";

import style from "./authFormBox.module.scss";

import logo from "./logo-big.png";

interface IBoxFormProps {
  children: JSX.Element;
}

export default function AuthBoxForm({ children }: IBoxFormProps) {
  const navigate = useNavigate();

  return (
    <div className={style.box}>
      <div className={style.clouse} onClick={() => navigate("/")}></div>
      <div className={style.box__logo}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>

      <div className={style.box__form}>{children}</div>
    </div>
  );
}
