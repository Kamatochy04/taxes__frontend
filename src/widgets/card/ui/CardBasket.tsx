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
          <Typography variant="p-card-name" tag={"p"}>
            Велосипед, Kerambit горный...
          </Typography>

          <div className={style.card__descr}>
            <div className={style.card__icon}>
              <button onClick={minus}>
                <Typography variant="p-card-date" tag={"p"}>
                  -
                </Typography>
              </button>
              <Typography variant="p-card-date" tag={"p"}>
                {count}
              </Typography>
              <button onClick={plus}>
                <Typography variant="p-card-date" tag={"p"}>
                  +
                </Typography>
              </button>
            </div>

            <div className={style.card__icon}>
              <FavoriteBorderIcon />
              <DeleteForeverIcon />
            </div>
          </div>
          <Typography variant="p-card-date" tag={"p"}>
            Доставка 5-7 дней до пункта выдачи
          </Typography>
        </div>
      </div>

      <div className={style.card__descr}>
        <Typography variant="h3-price" tag={"h3"}>
          725 BYN
        </Typography>

        <div className={style.squaredFour}>
          <input type="checkbox" id={uniqueID} />
          <label className={style.squaredFour__L} htmlFor={uniqueID}></label>
        </div>
      </div>
    </div>
  );
};
