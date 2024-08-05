import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { PersonalType } from "@/model";
import style from "./account.module.scss";

import { useState } from "react";
import { usePersonalMutation } from "@/features/user/api/AccountApi";
import { useNavigate } from "react-router-dom";

export const PersonalDeta = () => {
  const navigate = useNavigate();

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
              />
              <Field
                className={style.card__input}
                name={"phone_number"}
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
                autocomplete="off"
                type="email"
                placeholder="Email"
              />
              <Field
                className={style.card__input}
                name={"patronymic"}
                autocomplete="off"
                type="text"
                placeholder="отчество"
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
