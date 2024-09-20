import { OrdersData } from "@/model";
import style from "./cardAddPost.module.scss";
import { Button } from "@/shared/components/button/Button";
import { usePostOrdersMutation } from "@/features/user/api/ordersApi";
import Modal from "@/shared/components/modal/modal";
import { useState } from "react";

export const CardAddPost = ({
  coutn,
  price,
  orders,
}: {
  coutn: number;
  price: number;
  orders: OrdersData[];
}) => {

  console.log(orders);

  const [PostOrders] = usePostOrdersMutation();
  const [isModalActive, setModalActive] = useState(false);
  
  const handleUploudOrders = () => {
    orders.map((item) => {
      PostOrders(item)
    });
    setModalActive(true);     
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.card__Line}>
          <div className={style.card__Column}>
            <h3 className={style.button_register_title}>Итого</h3>

            <p className={style.button_register_title}>Товар</p>
            <p className={style.button_register_title}>Доставка</p>
          </div>

          <div className={style.card__Column}>
            <h3 className={style.button_register}>{price} BYN</h3>

            <p className={style.button_register}>{coutn} шт</p>

            <p className={style.button_register}>До пункта выдачи</p>
          </div>
        </div>
        <div className={style.card__Button}>
          <Button variant={"smallOrange"} onClick={handleUploudOrders}>Заказать</Button>
        </div>
        <div>
            {isModalActive && (
              <Modal title="" onClose={handleModalClose}>
                Оплата принята
              </Modal>
            )}
          </div>
      </div>
      <button className={style.button} >Оплатить</button>
    </>
  );
};
