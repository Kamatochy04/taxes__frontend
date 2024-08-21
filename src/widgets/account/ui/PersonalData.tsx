import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { AccountData, PersonalType } from "@/model";
import style from "./account.module.scss";

import { FC, useState } from "react";
import { usePersonalMutation } from "@/features/user/api/AccountApi";
import { useNavigate } from "react-router-dom";

interface PersonalDetaProps {
  data: AccountData;
}

export const PersonalDeta: FC<PersonalDetaProps> = ({ data }) => {
  const navigate = useNavigate();

  console.log(data);

  const [addPassport] = useState<PersonalType>({
    first_name: "",
    last_name: "",
    patronymic: "",
    email: "",
    phone_number: "",
  });

  const [addPersonalData] = usePersonalMutation();

  return (
    <>
      <Formik<PersonalType>
        initialValues={addPassport}
        onSubmit={(values) => {
          addPersonalData(values);
        }}
      >
        {({ isValid }) => (
          <Form style={{ gap: "16px" }}>
            <div className={style.card__Fild}>
              <Field
                className={style.card__input}
                autocomplete="off"
                name={"first_name"}
                type="text"
                placeholder="имя"
                //value={data.first_name}
              />
              <Field
                className={style.card__input}
                name={"phone_number"}
                type="text"
                placeholder="телефон"
                //value={data.phone_number}
              />
              <Field
                className={style.card__input}
                name={"last_name"}
                type="text"
                placeholder="фамилия"
                //value={data.last_name}
              />
              <Field
                className={style.card__input}
                name={"email"}
                autocomplete="off"
                type="email"
                placeholder="Email"
                //value={data.email}
              />
              <Field
                className={style.card__input}
                name={"patronymic"}
                autocomplete="off"
                type="text"
                placeholder="отчество"
                //value={data.patronymic}
              />
            </div>
            <div className={style.card__delete}>
              <Button type="submit" variant={"text"} disabled={!isValid}>
                <Typography variant="link-account" tag={"p"}>
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
