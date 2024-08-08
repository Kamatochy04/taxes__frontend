import { CardBasket, Path, CardAddPost } from "@/widgets";
import style from "./basket.module.scss";

export const Basket = () => {
  return (
    <>
      <Path />
      <div className={style.fild}>
        <section className={style.cards}>
          <CardBasket />
          <CardBasket />
          <CardBasket />
        </section>
        <CardAddPost />
      </div>
    </>
  );
};
