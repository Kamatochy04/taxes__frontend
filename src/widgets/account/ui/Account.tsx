import { Path } from "@/widgets";
import style from "./account.module.scss";
import { TaxpayerDetails } from "./TaxpayerDetails";
import { PassportDetails } from "./PassportDetails";
import { PersonalDeta } from "./PersonalData";
import { Typography } from "@/shared/components/typography/Typography";
import { ProfilePhoto } from "./ProfilePhoto";
import { useAddDataUserQuery } from "@/features/user/api/AccountApi";

export const Account = () => {
  const {data} = useAddDataUserQuery('');

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
          <TaxpayerDetails />
        </div>

        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Паспортные данные
          </Typography>
          <PassportDetails />
        </div>

        <div className={style.card}>
          <Typography variant="h3-account" tag={"h3"}>
            Фото профиля
          </Typography>
          <ProfilePhoto />
        </div>
      </div>
    </>
  );
};
