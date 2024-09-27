import productImg from "@/shared/assets/img/easyTaxLogo.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./CardPurchases.module.scss";
import { Typography } from "@/shared/components/typography/Typography";

export const CardPurchases = ({ name, price, images }: { name: any, price:any, images:any }) => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={images !== null ? images : productImg} alt="product" />
      </div>
      <Typography variant="price" tag={"h3"}>
      {price} BYN
      </Typography>
      <p className={style.p}>{name} </p>

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
      <Typography variant="default" tag={"p"}>
        Дата покупки: 28.09.2024
      </Typography>
    </div>
  );
};
