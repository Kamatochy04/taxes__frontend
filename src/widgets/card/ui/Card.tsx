import productImg from "@/shared/assets/img/Rectangle 803.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Button } from "@/shared/components/button/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsResults } from "@/model";
import { FC } from "react";

interface ProductsItemProps {
  results: ProductsResults;
}

export const Card: FC<ProductsItemProps> = ({ results }) => {
  
  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={() => navigate(`/${results.id}`)}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>

      <Typography variant={"price"} tag={"p"}>
        {results.price}
      </Typography>

      <Typography tag={"p"}>{results.name}</Typography>

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
      <Button variant={"card"}>
        <Typography variant={"button"} tag={"p"}>
          Заказать
        </Typography>
      </Button>
    </div>
  );
};


//<img src={results.images[0].photo} alt="product" />