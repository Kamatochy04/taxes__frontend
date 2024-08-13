import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { TaxpayerType } from "@/model";
import { Button } from "@/shared/components/button/Button";

import style from "./details.module.scss";
import { useState } from "react";
import { useTaxpayerMutation } from "@/features/user/api/AccountApi";

export const Details = () => {
  const [addTaxpayer] = useState<TaxpayerType>({
    UNP: "",
    сategory: "",
  });

  const [addTaxpayerData] = useTaxpayerMutation();

  return (
    <div className={style.card}>
      <Typography variant="h3-account" tag={"h3"}>
        Добавить новый товар/услугу
      </Typography>
      <Formik<TaxpayerType>
        initialValues={addTaxpayer}
        onSubmit={(values) => {
          addTaxpayerData(values);
        }}
      >
        {() => (
          <Form>
            <div className={style.card__Line}>
              <div className={style.card__Column}>
                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Наименование
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите наименование товара"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Категория
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите категорию товара"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Описание
                  </Typography>
                  <Field
                    className={style.card__input__description}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите описание товара"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Местонахождение товара
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите местонахождение товара"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Контактная информация
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите номер телефона для связи"
                  />
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите email для связи"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Условия оплаты
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите условия оплаты"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Условия доставки
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите условия доставки"
                  />
                </div>

                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Цена, BYN
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите цену"
                  />
                </div>

                <div className={style.card__Button}>
                  <Button variant="addSentence">
                    <Typography variant="h3-account" tag={"h3"}>
                      Добавить предложение
                    </Typography>
                  </Button>
                </div>
              </div>

              <div className={style.card__Column}>
                <div>
                  <Typography variant="subscribe-input" tag={"p"}>
                    Фото товара/услуги
                  </Typography>
                  <Field
                    className={style.card__input__photo__big}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                </div>

                <div>
                  <Field
                    className={style.card__input__photo}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                  <Field
                    className={style.card__input__photo}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                  <Field
                    className={style.card__input__photo}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
