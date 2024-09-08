import StarIcon from "@mui/icons-material/Star";

import { Button } from "@/shared/components/button/Button";

import style from "./product.module.scss";
import { useLocation } from "react-router-dom";
import { ProductsResults } from "@/model";

export const ProductCard = () => {
  const location = useLocation();

  const cardData = location.state as ProductsResults;
  //Артикул №102581
  return (
    <div className={style.card}>
      <div className={style.card__imgs}>
        <img
          src={cardData.images[0].photo}
          alt=""
          className={style.card__imgs_main}
        />
        {/* <div className={style.card__imgs_wrapper}>
          <div className={style.a}></div>
          <div className={style.a}></div>
          <div className={style.a}></div>
          <div className={style.a}></div>
        </div> */}
      </div>
      <div className={style.card__inf}>
        <h3 className={style.card__inf_title}>{cardData.name}</h3>
        <h4 className={style.card__art}>Артикул № {cardData.count}</h4>
        <div className={style.card__box}>
          <StarIcon />
          <p>112</p>
        </div>
        <div className={style.card__inf_text}>
          <p>{cardData.description}</p>
        </div>
      </div>
      <div className={style.card__price}>
        <h3 className={style.card__price_title}>{cardData.price} BYN</h3>
        <h3 className={style.card__inf_t}>{cardData.name}</h3>
        <h4 className={style.card__inf_t}>Артикул № {cardData.id}</h4>
        <Button variant={"smallBlue"}>Добавить в корзину</Button>
        <div className={style.btn}>
          <Button variant={"smallOrange"}>Заказать</Button>
        </div>
      </div>
    </div>
  );
};
