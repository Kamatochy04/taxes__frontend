import productImg from "@/shared/assets/img/Rectangle 803.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import style from "./cardB.module.scss";
import { Typography } from "@/shared/components/typography/Typography";
import { useState } from "react";

export const CardBasket = () => {
  const [count, setCount] = useState(1);

  const minus = () => {
    setCount(count - 1);
  };

  const plus = () => {
    setCount(count + 1);
  };

  const uniqueID = `id-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;

  return (
    <div className={style.card}>
      <div className={style.card__descr}>
        <div className={style.card__img}>
          <img src={productImg} alt="product" />
        </div>

        <div className={style.card__d}>
          <p className={style.card__name}>Велосипед, Kerambit горный...</p>

          <div className={style.card__descr}>
            <div className={style.card__icon}>
              <button onClick={minus} className={style.card__button}>
                -
              </button>
              <p className={style.count}>{count}</p>
              <button onClick={plus} className={style.card__button}>
                +
              </button>
            </div>

            <div className={style.card__icon}>
              <FavoriteBorderIcon />
              <DeleteForeverIcon />
            </div>
          </div>
          <p className={style.footer}>Доставка 5-7 дней до пункта выдачи</p>
        </div>
        <div className={style.a}>
          <p className={style.a__title}>Заказ №98512</p>
          <p className={style.a__price}>725 BYN</p>
          <p className={style.a__descr}>Велосипед Kerambit</p>
          <p className={style.a__descr}>Артикул №2563</p>
        </div>
      </div>

      <div className={style.card__descr}>
        <h3 className={style.price}>725 BYN</h3>
      </div>
      <input type="checkbox" className={style.checkbox} />
    </div>
  );
};
