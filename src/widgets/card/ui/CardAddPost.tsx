import { Typography } from "@/shared/components/typography/Typography";
import style from "./cardAddPost.module.scss";

export const CardAddPost = () => {
  return (
    <>
      <div className={style.card}>
        <div className={style.card__Line}>
          <div className={style.card__Column}>
            <Typography variant="h3-register" tag={"h3"}>
              Итого
            </Typography>

            <Typography variant="button-register" tag={"p"}>
              Товар
            </Typography>
            <Typography variant="button-register" tag={"p"}>
              Доставка
            </Typography>
          </div>

          <div className={style.card__Column}>
            <Typography variant="h3-price" tag={"h3"}>
              3 625 BYN
            </Typography>

            <Typography variant="button-register" tag={"p"}>
              5 шт
            </Typography>

            <Typography variant="button-register" tag={"p"}>
              До пункта выдачи
            </Typography>
          </div>
        </div>
        <div className={style.card__Button}>
          <button type="submit" className={style.pay}>
            <Typography variant="h3-account" tag={"h3"}>
              Оплатить
            </Typography>
          </button>
        </div>
      </div>
    </>
  );
};
