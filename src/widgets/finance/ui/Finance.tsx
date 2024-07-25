import style from "./finance.module.scss";

export const Finance = () => {
  return (
    <form oninput="result.value=(parseInt(revenue.value)/100)*parseInt(percent.value)">
      <div className={style.finance}>
        <div className={style.card}>
          <p className={style.finance__text}>Процентная ставка, %</p>
          <div className={style.field}>
            <input type="number" name="percent" min="1" max="100" value="10" />
            <p className={style.finance__text}>%</p>
          </div>
        </div>
        <div className={style.card}>
          <p className={style.finance__text}>Выручка за месяц составляет</p>
          <div className={style.field}>
            <input type="number" name="revenue" value="1400" />
            <p className={style.finance__text}>BYN</p>
          </div>
        </div>
        <div className={style.card}>
          <p className={style.finance__text}>Налог за месяц составляет</p>
          <div className={style.field}>
            <output name="result">140</output>
            <p className={style.finance__text}>BYN</p>
          </div>
        </div>
      </div>
      <button className={style.button} type="submit">
        Оплатить
      </button>
    </form>
  );
};
