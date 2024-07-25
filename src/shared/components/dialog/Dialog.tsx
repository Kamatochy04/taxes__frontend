import ReactDOM from "react-dom";
import style from "./dialog.module.scss";
import { useEffect } from "react";

export const Dialog = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "none";
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.dialog}>{children}</div>,
    document.body
  );
};
