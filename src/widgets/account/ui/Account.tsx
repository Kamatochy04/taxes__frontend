import { Path } from "@/widgets";
import style from "./account.module.scss";
import { TaxpayerDetails } from "./TaxpayerDetails";
import { PassportDetails } from "./PassportDetails";
import { PersonalDeta } from "./PersonalData";

export const Account = () => {

  return (
    <>
      <Path />

      <div className={style.account}>
        <div className={style.card}>
          <p className={style.card__title}>Личные данные</p>
          <PersonalDeta/>          
        </div>

        <div className={style.card}>
          <p className={style.card__title}>Данные налогоплательщика</p>
          <TaxpayerDetails/>
        </div>

        <div className={style.card}>
          <p className={style.card__title}>Паспортные данные</p>
          <PassportDetails/>
        </div>
      </div>
    </>
  );
};
