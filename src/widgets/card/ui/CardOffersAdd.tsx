import style from "./cardF.module.scss";
import productImg from "@/shared/assets/img/no_photo.jpg";
import vectorImg from "@/shared/assets/img/Vector.png";
import { ProductsImages, ProductsResults } from "@/model";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface ProductsItemProps {
  results: ProductsResults;
}

export const CardOffersAdd: FC<ProductsItemProps> = ({ results }) => {
  let photo = results.images.map((item: ProductsImages) => item.photo);
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img
          src={photo[0] != undefined ? photo[0] : productImg}
          alt="product"
        />
      </div>

      <div className={style.card__d}>
        <h3 className={style.default}>{results.name}</h3>
        <h3 className={style.price}>{results.price} BYN</h3>
      </div>

      <div className={style.card__imgVector}>
        <NavLink to={"/details"} state={{ from: { results } }}>
          <img src={vectorImg} alt="vector" />
        </NavLink>
      </div>
    </div>
  );
};
