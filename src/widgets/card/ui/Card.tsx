import productImg from "@/shared/assets/img/easyTaxLogo.png"
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Button } from "@/shared/components/button/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsImages, ProductsResults } from "@/model";
import { FC, useEffect, useState } from "react";

interface ProductsItemProps {
  results: ProductsResults;
}

export const Card: FC<ProductsItemProps> = ({ results }) => {
  let photo = results.images.map((item: ProductsImages) => item.photo);

  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const t = localStorage.getItem("accessToken");

    if (t) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth, isAuth]);

  return (
    <div
      className={style.card}
      onClick={() => isAuth ? navigate(`/${results.id}`, { state: results }):''}
    >
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
      {isAuth ? <Button variant={"smallOrange"}>Заказать</Button> : ''}      
    </div>
  );
};
