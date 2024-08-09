import React from "react";
import style from "./containerField.module.scss";
import { Container } from "./Container";

export const ContainerField = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.container}>
      <Container>
        <div className={style.block}>{children}</div>
      </Container>
    </div>
  );
};
