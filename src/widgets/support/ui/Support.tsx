import style from "./support.module.scss";

export const Support = () => {
  return (
    <div className={style.support}>
      <div className={style.card}>
        <p>Номер телефона для связи</p>
        <p>+375 29 608 75 75</p>
        <p>Электронная почта для связи</p>
        <p>Exlabstartup@gmail.com</p>
      </div>
    </div>
  );
};
