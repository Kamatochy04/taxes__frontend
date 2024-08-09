import style from "./offers.module.scss";
import { CardBasket, Path, CardAddPost } from "@/widgets";

export const Offers = () => {

  return (
    <>
      <Path />
      <div className={style.fild}>
        <section className={style.cards}>
          <CardBasket />
          <CardBasket />
          <CardBasket />
        </section>
        <CardAddPost text={"Добавить предложение"} variant={"addSentence"}/>
      </div>

    </>
  );
};
