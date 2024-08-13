import style from "./cardF.module.scss";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsData } from "@/model";
import { FC } from "react";

interface ProductsItemProps {
  data: ProductsData;
}

export const CardOffersAdd: FC<ProductsItemProps> = ({ data }) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={data.images[0]} alt="product" />
      </div>

      <div className={style.card__d}>
        <Typography variant="p-card-name" tag={"p"}>
          {data.name}
        </Typography>
        <Typography variant="h3-price" tag={"h3"}>
          {data.count}
        </Typography>
      </div>
    </div>
  );
};
