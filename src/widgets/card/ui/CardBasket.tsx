import productImg from "@/shared/assets/img/easyTaxLogo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import style from "./cardB.module.scss";

export const CardBasket = ({ item, plus, minus, count }: { item: any, plus:any, minus:any, count:any }) => {

  const uniqueID = `id-${Date.now().toString(36)}-${Math.random()
    .toString(36)
    .slice(2)}`;

    console.log(item.images[0]);

  return (
    <div className={style.card}>
      <div className={style.card__descr}>
        <div className={style.card__img}>
          <img src={item.images[0] !== undefined ? item.images[0].photo : productImg} alt="product" />
        </div>

        <div className={style.card__d}>
          <p className={style.card__name}>{item.name}</p>

          <div className={style.card__descr}>
            <div className={style.card__icon}>
              <button onClick={() => minus(item.id)} className={style.card__button}>
                -
              </button>
              <p className={style.count}>{count}</p>
              <button onClick={() => plus(item.id)} className={style.card__button}>
                +
              </button>
            </div>

            <div className={style.card__icon}>
              <FavoriteBorderIcon />
              <DeleteForeverIcon />
            </div>
          </div>
          <p className={style.footer}>Доставка 5-7 дней до пункта выдачи</p>
        </div>
        <div className={style.a}>
          <p className={style.a__title}>Заказ №98512</p>
          <p className={style.a__price}>{item.price}</p>
          <p className={style.a__descr}>{item.name}</p>
          <p className={style.a__descr}>Артикул №2563</p>
        </div>
      </div>

      <div className={style.card__descr}>
        <h3 className={style.price}>{item.price}</h3>
      </div>
      <input type="checkbox"  className={style.checkbox} />
    </div>
  );
};
