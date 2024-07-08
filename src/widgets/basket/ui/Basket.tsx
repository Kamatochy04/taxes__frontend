import style from "./basket.module.scss";

export const Basket = () => {
  return (
    <div className={style.basket}>
      <div className={style.card}>Карточка товара</div>
      <div className={style.card}>Карточка товара</div>
      <div className={style.card}>Карточка товара</div>
    </div>
  );
};
