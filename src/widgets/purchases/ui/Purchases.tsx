import style from "./purchases.module.scss";
import { CardPurchases, Path } from "@/widgets";

export const Purchases = () => {
  return (
    <>
      <Path />
      <section className={style.purchases}>
        <CardPurchases />
        <CardPurchases />
        <CardPurchases />
      </section>
    </>
  );
};
