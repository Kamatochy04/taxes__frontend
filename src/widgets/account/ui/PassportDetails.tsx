import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { AccountData } from "@/model";

import style from "./account.module.scss";
import { FC, useState } from "react";
import { usePatchDataUserMutation } from "@/features/user/api/AccountApi";

interface PersonalDetaProps {
  data: AccountData;
}

export const PassportDetails: FC<PersonalDetaProps> = ({ data }) =>{

  const [addPassport] = useState<AccountData>({
    id: `${data.id !== null ? data.id : ''}`,
    email: `${data.email !== null ? data.email : ''}`,
    first_name: `${data.first_name !==null ? data.first_name : ''}`,
    last_name: `${data.last_name !== null ? data.last_name : ''}`,
    patronymic: `${data.patronymic !== null ? data.patronymic : ''}`,
    unp: `${data.unp !== null ? data.unp : ''}`,
    registration_address: `${data.registration_address !== null ? data.registration_address : ''}`,
    residential_address: `${data.residential_address !== null ? data.residential_address : ''}`,    
    date_of_birth: data.date_of_birth !== null ? data.date_of_birth : new Date,
    passport_num: `${data.passport_num !== null ? data.passport_num : ''}`,
    phone_number: `${data.phone_number !== null ? data.phone_number : ''}`,
    //date_of_birth: '2024-09-11',
  });

  const [updatingUserData] = usePatchDataUserMutation();

  return (
    <>
      <Formik<AccountData>
        initialValues={addPassport}
        onSubmit={(values) => {
          console.log(values);
          updatingUserData(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className={style.card__Line}>
              <div className={style.card__Column}>
                <Typography variant="default" tag={"p"}>
                  Дата рождения
                </Typography>
                <Typography variant="default" tag={"p"}>
                  Паспорт
                </Typography>
              </div>

              <div className={style.card__Column}>
                <Field
                  className={style.card__input}
                  name={"date_of_birth"}
                  type="date"
                  autoComplete="off"
                  placeholder="дата"
                />
                <div className={style.card__Line}>
                  <Field
                    className={style.card__input}
                    name={"passport_num"}
                    type="text"
                    autoComplete="off"
                    placeholder="серия и номер"
                  />
                </div>
                <div className={style.card__Line}>
                  <Button type="submit" variant={"text"} disabled={!isValid}>
                    <Typography variant="default" tag={"p"}>
                      Изменить
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.card__Line}>
              <Typography variant="default" tag={"p"}>
                Адрес регистрации
              </Typography>

              <Field
                className={style.card__input}
                name={"registration_address"}
                type="text"
                autoComplete="off"
                placeholder="регистрация"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
