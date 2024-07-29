import { Card, Path } from "@/widgets";
import style from "./basket.module.scss";

export const Basket = () => {
  return (
    <>
      <Path />
      <section className={style.cards}>
        <Card />
        <Card />
        <Card />
      </section>

      <div className={style.blockButton}>
        <button className={style.clear}>Очистить</button>
        <button className={style.order}>Заказать</button>
      </div>
    </>
  );
};
