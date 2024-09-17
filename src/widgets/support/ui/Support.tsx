import { Path } from "@/widgets";
import style from "./support.module.scss";

export const Support = () => {
  return (
    <>
      <Path path="Поддержка" />
      <div className={style.support}>
        <div className={style.card}>
          <p className={style.card__title}>Номер телефона для связи</p>
          <p className={style.card__text}>+375 29 608 75 75</p>
          <p className={style.card__title}>Электронная почта для связи</p>
          <p className={style.card__text}>Exlabstartup@gmail.com</p>
        </div>
      </div>
    </>
  );
};
