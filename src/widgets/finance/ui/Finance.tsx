import { Path } from "@/widgets";
import style from "./finance.module.scss";
import { useEffect, useState } from "react";
import { Button } from "@/shared/components/button/Button";
import { useGetUserMeOrdersSumQuery } from "@/features/user/api/AccountApi";

export const Finance = () => {

  const { data } = useGetUserMeOrdersSumQuery('');
  console.log(data);
  const [percent, setPercent] = useState<string>("10");
  const [revenue, setRevenue] = useState<string>("153298");

  useEffect(() => {
    if (data !== undefined) {
      setRevenue(data.sum);
    };
 }, [data]);

 
  
  
  const handlePercentEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(e.target.value);
  };

  /*const handleRevenueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRevenue(e.target.value);
  };*/

  const handlePay = () => {
    let question = confirm("Вы согласны оплатить налог?");
    alert(question == true ? "Спасибо" : "До скорой встречи");
  };

  return (
    <>
      <Path path="Мои финансы" />
      <div className={style.finance}>
        <div className={style.card}>
          <div className={style.input}>
            <p className={style.finance__text}>Процентная ставка, %</p>
            <div className={style.field}>
              <input
                disabled
                value={percent}
                onChange={handlePercentEvent}
                type="text"
                name="percent"
                min="1"
                max="100"
              />
              <p className={style.finance__text}>%</p>
            </div>
          </div>
          <div className={style.input}>
            <p className={style.finance__text}>Выручка за месяц составляет</p>
            <div className={style.field}>
              <input
                disabled
                value={revenue}
                //onChange={handleRevenueEvent}
                type="text"
                name="revenue"
              />
              <p className={style.finance__text}>BYN</p>
            </div>
          </div>
          <div className={style.input}>
            <p className={style.finance__text}>Налог за месяц составляет</p>
            <div className={style.field}>
              <span>
                {((parseInt(revenue) / 1000) * parseInt(percent)).toFixed(2)}
              </span>
              <p className={style.finance__text}>BYN</p>
            </div>
          </div>

          <div className={style.button}>
            <Button variant="smallOrange" onClick={handlePay}>
              Оплатить
            </Button>
          </div>
        </div>
        <div className={style.header}>
          <div className={style.header__item}>
            <span>Процентная ставка</span> <p> 10 %</p>
          </div>
          <div className={style.header__item}>
            <span>Выручка за месяц</span>
            <p>1400,00 BYN</p>
          </div>
        </div>

        <p className={style.price}>
          <p>150,00 BYN</p>
          <span>налог за месяц</span>
        </p>
        <button className={style.button__price}>Оплатить</button>
      </div>
    </>
  );
};
