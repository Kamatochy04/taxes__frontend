import { Path } from "@/widgets";
import style from "./account.module.scss";
import { TaxpayerDetails } from "./TaxpayerDetails";
import { PassportDetails } from "./PassportDetails";
import { PersonalDeta } from "./PersonalData";
import { Typography } from "@/shared/components/typography/Typography";
import { ProfilePhoto } from "./ProfilePhoto";
import { useGetDataUserQuery } from "@/features/user/api/AccountApi";

export const Account = () => {
  const {data} = useGetDataUserQuery('');

  return (
    <>
      <Path />

      <div className={style.account}>
        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Личные данные
          </Typography>

          {data != undefined
          ? <PersonalDeta data={data} />           
          : "ERROR"}
        </div>

        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Данные налогоплательщика
          </Typography>

          {data != undefined
          ? <TaxpayerDetails dataUser={data} />           
          : "ERROR"}
        </div>

        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Паспортные данные
          </Typography>

          {data != undefined
          ? <PassportDetails data={data} />           
          : "ERROR"}
        </div>

        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Фото профиля
          </Typography>

          {data != undefined
          ? <ProfilePhoto Avatar={data.avatar != undefined ? data.avatar : 'Error'} />           
          : "ERROR"}
        </div>
      </div>
    </>
  );
};
