import { Path } from "@/widgets";
import style from "./finance.module.scss";
import { useState } from "react";
import { Button } from "@/shared/components/button/Button";

export const Finance = () => {
  const [percent, setPercent] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");

  const handlePercentEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPercent(e.target.value);
  };

  const handleRevenueEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRevenue(e.target.value);
  };

  return (
    <>
      <Path />
      <div className={style.finance}>
        <div className={style.card}>
          <div className={style.input}>
            <p className={style.finance__text}>Процентная ставка, %</p>
            <div className={style.field}>
              <input
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
                value={revenue}
                onChange={handleRevenueEvent}
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
                {((parseInt(revenue) / 100) * parseInt(percent)).toFixed(2)}
              </span>
              <p className={style.finance__text}>BYN</p>
            </div>
          </div>

          <div className={style.button}>
            <Button variant="smallOrange">Оплатить</Button>
          </div>
        </div>
      </div>
    </>
  );
};
