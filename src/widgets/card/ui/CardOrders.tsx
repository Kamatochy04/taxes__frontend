import style from "./cardAddPost.module.scss";
import { DefaultImg } from "@/shared/assets/icons/DefaultImg";


export const CardOrders = ({ results }: any) => {
  return (
    <>
        <div className={style.card}>
          <div className={style.card__title}>
            <h2>Заказ №102558</h2>
            <input className={style.card__input} type="checkbox" />
          </div>

          <div className={style.card__field}>
            <div className={style.card__img}>
              <DefaultImg />
            </div>

            <div className={style.card__descr}>
              <p className={style.card__fieldName}>Покупатель</p>
              <p className={style.card__fieldName}>Контактные данные</p>
              <p className={style.card__fieldName}>Условия доставки</p>
              <p className={style.card__fieldName}>Условия оплаты</p>
            </div>

            <div className={style.card__descr}>
              <p className={style.card__fieldValues}>{results.buyer.first_name} {results.buyer.last_name} {results.buyer.patronymic}</p>
              <p className={style.card__fieldValues}>{results.buyer.phone_number}</p>
              <p className={style.card__fieldValues}>
                пункт выдачи {results.buyer.registration_address}
              </p>
              <p className={style.card__fieldValues}>при получении</p>
            </div>
          </div>
        </div>
    </>
  );
};
