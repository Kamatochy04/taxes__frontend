import productImg from "@/shared/assets/img/Rectangle 803.png";
import style from "./cardF.module.scss";
import { Typography } from "@/shared/components/typography/Typography";

export const CardOffers = () => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>

      <div className={style.card__d}>
        <Typography variant="p-card-name" tag={"p"}>
          Меловые карьеры, экотропа
        </Typography>
        <Typography variant="h3-price" tag={"h3"}>
          725 BYN
        </Typography>
      </div>
    </div>
  );
};
