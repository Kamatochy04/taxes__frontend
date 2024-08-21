import ReactDOM from "react-dom";
import style from "./loader.module.scss";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className={style.wrapper}>
      <div className={style.loader}></div>,
    </div>,
    document.body
  );
};