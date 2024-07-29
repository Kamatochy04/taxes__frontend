import { Path } from "@/widgets";
import style from "./PaymentMethods.module.scss";
export const PaymentMethods = () => {
  return (
    <>
      <Path />
      <div className={style.payment}>
        <div className={style.card}>
          <div className={style.card__img}></div>
          <div className={style.card__wrapper}>
            <p className={style.text}>Карта 1234 5678 9123 8526</p>
            <p className={style.text}>09/28</p>
          </div>
        </div>
      </div>
    </>
  );
};
