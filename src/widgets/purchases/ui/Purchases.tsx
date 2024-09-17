import style from "./purchases.module.scss";
import { CardPurchases, Path } from "@/widgets";

export const Purchases = () => {
  return (
    <>
      <Path path="Мои покупки" />
      <section className={style.purchases}>
        <CardPurchases />
        <CardPurchases />
        <CardPurchases />
      </section>
    </>
  );
};
