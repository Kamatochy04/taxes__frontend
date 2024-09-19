//import { DefaultImg } from "@/shared/assets/icons/DefaultImg";
import style from "./orders.module.scss";
import { Path } from "@/widgets";
import { useGetUserMeOrdersQuery } from "@/features/user/api/AccountApi";
import { CardOrders } from "@/widgets/card/ui/CardOrders";

export const Orders = () => {

  const { data } = useGetUserMeOrdersQuery('')
  console.log(data);


  return (
    <>
      <Path path="Заказы" />
      <div className={style.orders}>

      {data !== undefined
          ? data.results.map((item: any) => (
              <CardOrders results={item} key={item.id} />
            ))
          : "ERROR"}

      </div>
    </>
  );
};


/*
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
              <p className={style.card__fieldValues}>Петрова Мария</p>
              <p className={style.card__fieldValues}>Контактные данные</p>
              <p className={style.card__fieldValues}>
                пункт выдачи №56, г. Минск, ул. Щорса, 17
              </p>
              <p className={style.card__fieldValues}>при получении</p>
            </div>
          </div>
        </div>
        */