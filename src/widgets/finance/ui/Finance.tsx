import style from "./finance.module.scss";

export const Finance = () => {
  return (
    <div className={style.finance}>
      <div className={style.card}>
        <p>Моя выручка</p>
        <p>1 000 000 руб с НДС</p>
      </div>
      <div className={style.card}>
        <p>Моя выручка</p>
        <p>1 000 000 руб с НДС</p>
      </div>
    </div>
  );
};
