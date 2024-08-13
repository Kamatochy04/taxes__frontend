import productImg from "@/shared/assets/img/Rectangle 803.png";
import StarIcon from "@mui/icons-material/Star";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import style from "./card.module.scss";
import { Button } from "@/shared/components/button/Button";
import { useNavigate } from "react-router-dom";

export const Card = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  return (
    <div className={style.card} onClick={() => navigate(`/:${id}`)}>
      <div className={style.card__img}>
        <img src={productImg} alt="product" />
      </div>

      <h3 className={style.card__title}>25 BYN</h3>

      <p className={style.card__text}>Велосипед, Kerambit горный...</p>

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
      <Button variant={"card"}>Заказать</Button>
    </div>
  );
};
