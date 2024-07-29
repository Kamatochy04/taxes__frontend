import style from "./purchases.module.scss";
import { Card, Path } from "@/widgets";

export const Purchases = () => {
  return (
    <>
      <Path />
      <section className={style.purchases}>
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
};
