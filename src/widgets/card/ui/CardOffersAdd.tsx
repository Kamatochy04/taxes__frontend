import style from "./cardF.module.scss";
import { Typography } from "@/shared/components/typography/Typography";
import productImg from "@/shared/assets/img/no_photo.jpg";
import vectorImg from "@/shared/assets/img/Vector.png";
import { ProductsImages, ProductsResults } from "@/model";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface ProductsItemProps {
  results: ProductsResults;
}

export const CardOffersAdd: FC<ProductsItemProps> = ({ results }) => {
  
  let photo = results.images.map((item: ProductsImages) => (item.photo));
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={photo[0] != undefined ? photo[0] : productImg} alt="product" />
      </div>

      <div className={style.card__d}>
        <Typography variant="default" tag={"p"}>
          {results.name}
        </Typography>
        <Typography variant="price_card" tag={"h3"}>
          {results.price} BYN
        </Typography>
      </div>

      <div className={style.card__imgVector}>
        <NavLink to={"/details"} state={{ from: {results} }}>
          <img src={vectorImg} alt="vector" />
        </NavLink>
      </div>
    </div>
  );
};
