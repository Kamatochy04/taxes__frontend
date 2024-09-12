import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { AccountData } from "@/model";
import style from "./account.module.scss";

import { FC, useState } from "react";
import { usePatchDataUserMutation } from "@/features/user/api/AccountApi";
import { useNavigate } from "react-router-dom";

interface PersonalDetaProps {
  data: AccountData;
}

export const PersonalDeta: FC<PersonalDetaProps> = ({ data }) => {
  const navigate = useNavigate();

  console.log(data);

  const [personalData] = useState<AccountData>({
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
  });

  const [updatingUserData] = usePatchDataUserMutation();

  return (
    <>
      <Formik<AccountData>
        initialValues={personalData}
        onSubmit={(values) => {
          console.log(values);
          updatingUserData(values);
        }}
      >
        {({ isValid }) => (
          <Form style={{ gap: "16px" }}>
            <div className={style.card__Fild}>
              <Field
                className={style.card__input}
                autoComplete="off"
                name={"first_name"}
                type="text"
                placeholder="имя"
              />
              <Field
                className={style.card__input}
                name={"phone_number"}
                autoComplete="off"
                type="text"
                placeholder="телефон"
              />
              <Field
                className={style.card__input}
                name={"last_name"}
                type="text"
                placeholder="фамилия"
              />
              <Field
                className={style.card__input}
                name={"email"}
                autoComplete="off"
                type="email"
                placeholder="Email"
              />
              <Field
                className={style.card__input}
                name={"patronymic"}
                autoComplete="off"
                type="text"
                placeholder="отчество"
              />
            </div>
            <div className={style.card__delete}>
              <Button type="submit" variant={"text"} disabled={!isValid}>
                <Typography variant="default" tag={"p"}>
                  Изменить
                </Typography>
              </Button>
              <div
                className={style.link_account_delete}
                onClick={() => navigate("/delete-account")}
              >
                Удалить аккаунт
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
