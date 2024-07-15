import { Card } from "@/widgets";
import style from "./basket.module.scss";

export const Basket = () => {
  return (
    <section className={style.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
};
