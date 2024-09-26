import { useState } from "react";
import style from "./cardOrders.module.scss";
import productImg from "@/shared/assets/img/easyTaxLogo.png";
import Modal from "@/shared/components/modal/modal";


export const CardOrders = ({ results }: any) => {

  const [checked, setChecked] = useState(false);
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setChecked(!checked);
    if (checked !== true) {
      setModalActive(true);
    };    
  };

  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <>
        <div className={style.card}>
          <div className={style.card__title}>
            <h2>Заказ №{results.id}</h2>
            <input className={style.card__input} type="checkbox" checked={checked} onChange={handleModalOpen}/>
            {isModalActive && (
              <Modal title="" onClose={handleModalClose}>
                Заказ принят
              </Modal>
            )}
          </div>

          <div className={style.card__field}>
            <div className={style.card__img}>
              <img src={results.product.images[0].photo !== undefined ? results.product.images[0].photo : productImg} className={style.card__img} alt="" />            
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
