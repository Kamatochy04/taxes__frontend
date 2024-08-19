import productImg from "@/shared/assets/img/Rectangle 803.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Button } from "@/shared/components/button/Button";
import { useNavigate } from "react-router-dom";
import { Typography } from "@/shared/components/typography/Typography";

export const Card = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={() => navigate(`/${id}`)}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>

      <Typography variant={"price"} tag={"p"}>
        25 BYN
      </Typography>

      <Typography tag={"p"}>Велосипед, Kerambit горный...</Typography>

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
