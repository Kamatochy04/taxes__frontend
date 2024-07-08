import { DefaultImg } from "@/shared/assets/icons/DefaultImg";
import style from "./orders.module.scss";

export const Orders = () => {
  return (
    <div className={style.orders}>
      <div className={style.card}>
        <div className={style.card__img}>
          <DefaultImg />
        </div>
        <div className={style.card__descr}>
          <p>Имя покупателя</p>
          <p>250 руб </p>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.card__img}>
          <DefaultImg />
        </div>
        <div className={style.card__descr}>
          <p>Имя покупателя</p>
          <p>250 руб </p>
        </div>
      </div>
    </div>
  );
};
