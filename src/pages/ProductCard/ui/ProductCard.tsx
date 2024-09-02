import StarIcon from "@mui/icons-material/Star";
import style from "./product.module.scss";
<<<<<<< HEAD

=======
import { Button } from "@/shared/components/button/Button";
>>>>>>> 6f601aa157c6290e03c76dbe57d0cfbed5252399
export const ProductCard = () => {
  return (
    <div className={style.card}>
      <div className={style.card__imgs}>
        <img src="" alt="" className={style.card__imgs_main} />
        <div className={style.card__imgs_wrapper}>
          <div className={style.a}></div>
          <div className={style.a}></div>
          <div className={style.a}></div>
          <div className={style.a}></div>
        </div>
      </div>
      <div className={style.card__inf}>
        <h3 className={style.card__inf_title}>Игровая гарнитура ASUS</h3>
        <h4 className={style.card__art}>Артикул №102581</h4>
        <div className={style.card__box}>
          <StarIcon />
          <p>112</p>
        </div>
        <div className={style.card__inf_text}>
          <p>
            ROG Delta - первая в мире игровая гарнитура с ведущим в отрасли
            четырехъядерным ЦАП hi-fi ESS 9218, обеспечивающим безупречно чистый
            и детализированный звук, который дает серьезным геймерам
            преимущество, необходимое для победы.
          </p>
          <p>
            ROG Delta оснащена разъемом USB-C и поставляется с адаптером
            USB-C-USB 2.0, позволяющим играть на ПК, консоли и мобильном
            устройстве без замены гарнитуры. Уникальный в своем роде круговой
            эффект радужной RGB-подсветки придает стильный вид, выделяющий вас
            на поле боя.
          </p>
        </div>
      </div>
      <div className={style.card__price}>
        <h3 className={style.card__price_title}>317 BYN</h3>
<<<<<<< HEAD
        <h3 className={style.card__inf_t}>Игровая гарнитура ASUS</h3>
        <h4 className={style.card__inf_t}>Артикул №102581</h4>

        <div className={style.card__buttons}>
          <button className={style.card__button}>Добавить в корзину</button>
          <button className={style.card__button_2}>Купить</button>
        </div>
=======
        <Button variant={"smallBlue"}>Добавить в корзину</Button>
        <Button variant={"smallOrange"}>Заказать</Button>
>>>>>>> 6f601aa157c6290e03c76dbe57d0cfbed5252399
      </div>
    </div>
  );
};
