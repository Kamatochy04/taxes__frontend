import productImg from "@/shared/assets/img/Rectangle 803.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Typography } from "@/shared/components/typography/Typography";

export const CardPurchases = () => {
  return (
    <div className={style.card}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>
      <Typography variant="h3-price" tag={"h3"}>
        725 BYN
      </Typography>
      <Typography variant="p-card-name" tag={"p"}>
        Велосипед, Kerambit горный...
      </Typography>
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
      <Typography variant="p-card-date" tag={"p"}>
        Дата покупки: 24.02.2024
      </Typography>
    </div>
  );
};
