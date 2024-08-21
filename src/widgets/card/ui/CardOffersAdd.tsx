import style from "./cardF.module.scss";
import { Typography } from "@/shared/components/typography/Typography";
import productImg from "@/shared/assets/img/Rectangle 803.png";
import { ProductsResults } from "@/model";
import { FC } from "react";

interface ProductsItemProps {
  results: ProductsResults;
}

export const CardOffersAdd: FC<ProductsItemProps> = ({ results }) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>

      <div className={style.card__d}>
        <Typography variant="default" tag={"p"}>
          {results.name}
        </Typography>
        <Typography variant="price_card" tag={"h3"}>
          {results.price} BYN
        </Typography>
      </div>
    </div>
  );
};
