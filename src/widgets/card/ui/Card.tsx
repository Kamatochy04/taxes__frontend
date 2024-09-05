import productImg from "@/shared/assets/img/Rectangle 803.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Button } from "@/shared/components/button/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsImages, ProductsResults } from "@/model";
import { FC } from "react";

interface ProductsItemProps {
  results: ProductsResults;
}

export const Card: FC<ProductsItemProps> = ({ results }) => {
  let photo = results.images.map((item: ProductsImages) => item.photo);

  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={() => navigate(`/${results.id}`)}>
      <div className={style.card__img}>
        <img
          src={photo[0] != undefined ? photo[0] : productImg}
          alt="product"
        />
      </div>

      <Typography variant={"price"} tag={"p"}>
        {results.price} BYN
      </Typography>

      <p className={style.p}>{results.name} </p>

      <div className={style.card__descr}>
        <div className={style.card__icon}>
          <StarIcon />
          <p>112</p>
        </div>
        <div className={style.card__icon}>
          <ModeCommentOutlinedIcon />
          <p>58</p>
        </div>
      </div>
      <Button variant={"smallOrange"}>Заказать</Button>
    </div>
  );
};
