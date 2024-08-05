import React from "react";
import style from "./containerField.module.scss";

export const ContainerField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.container}>
      <div className={style.line}></div>
      <div className={style.block}>
        {children}
      </div>
      <div className={style.line}></div>
    </div>
  );
};
