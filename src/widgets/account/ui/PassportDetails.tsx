import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { PassportType } from "@/model";

import style from "./account.module.scss";
import { useState } from "react";
import { usePassportMutation } from "@/features/user/api/AccountApi";

export const PassportDetails = () => {
  const [addPassport] = useState<PassportType>({
    date: new Date(),
    series: "",
    number: "",
    registration: "",
  });

  const [addPassportData] = usePassportMutation();

  return (
    <>
      <Formik<PassportType>
        initialValues={addPassport}
        onSubmit={(values) => {
          addPassportData(values);
        }}
      >
        {({ isValid }) => (
          <Form>
            <div className={style.card__Line}>
              <div className={style.card__Column}>
                <Typography variant="subscribe-input" tag={"p"}>
                  Дата рождения
                </Typography>
                <Typography variant="subscribe-input" tag={"p"}>
                  Паспорт
                </Typography>
              </div>

              <div className={style.card__Column}>
                <Field
                  className={style.card__input}
                  name={"date"}
                  type="date"
                  placeholder="дата"
                />
                <div className={style.card__Line}>
                  <Field
                    className={style.card__input__min}
                    name={"series"}
                    type="text"
                    placeholder="серия"
                  />
                  <Field
                    className={style.card__input__min}
                    name={"number"}
                    type="text"
                    placeholder="номер"
                  />
                </div>
                <div className={style.card__Line}>
                  <Button type="submit" variant={"text"} disabled={!isValid}>
                    <Typography variant="link-account" tag={"p"}>
                      Изменить
                    </Typography>
                  </Button>
                </div>
              </div>
            </div>
            <div className={style.card__Line}>
              <Typography variant="subscribe-input" tag={"p"}>
                Адрес регистрации
              </Typography>

              <Field
                className={style.card__input}
                name={"registration"}
                type="text"
                placeholder="прописка"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
