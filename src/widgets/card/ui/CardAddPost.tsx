import style from "./cardAddPost.module.scss";
import { Button } from "@/shared/components/button/Button";

export const CardAddPost = ({
  coutn,
  price,
}: {
  coutn: number;
  price: number;
}) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.card__Line}>
          <div className={style.card__Column}>
            <h3 className={style.button_register_title}>Итого</h3>

            <p className={style.button_register_title}>Товар</p>
            <p className={style.button_register_title}>Доставка</p>
          </div>

          <div className={style.card__Column}>
            <h3 className={style.button_register}>{price} BYN</h3>

            <p className={style.button_register}>{coutn} шт</p>

            <p className={style.button_register}>До пункта выдачи</p>
          </div>
        </div>
        <div className={style.card__Button}>
          <Button variant={"smallOrange"}>Заказать</Button>
        </div>
      </div>
      <button className={style.button}>Оплатить</button>
    </>
  );
};
