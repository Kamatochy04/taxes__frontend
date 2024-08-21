import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsResults } from "@/model";
import { Button } from "@/shared/components/button/Button";

import style from "./details.module.scss";
import { useState } from "react";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import { useNewProductMutation } from "@/features/user/api/productsApi";

export const Details = () => {
  const [addProductsResults] = useState<ProductsResults>({
    id: "",
    name: "",
    description: "",
    price: "",
    count: "",
    category: "",
    seller: "",
    images: [],
  });

  const text = `Информация по добавлению инфы
  - символы
  - количество`;

  const [addProductsResultsData] = useNewProductMutation();

  return (
    <div className={style.card}>
      <Typography variant="default" tag={"h3"}>
        Новое предложение
      </Typography>
      
      <Formik<ProductsResults>
        initialValues={addProductsResults}
        onSubmit={(values) => {
          addProductsResultsData(values);
        }}
      >
        {() => (
          <Form>
            <div className={style.card__Line}>
              <div className={style.card__Column}>
                <div>
                  <Typography variant="default" tag={"p"}>
                  Название товара/услуги *
                  </Typography>

                  <HintCloud text={text}>
                    <Field
                      className={style.card__input}
                      name={"name"}
                      type="text"
                      placeholder="Введите название товара/услуги"
                    />
                  </HintCloud>
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
                    Категория*
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите категорию товара"
                  />
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
                    Описание*
                  </Typography>
                  <Field
                    className={style.card__input__description}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите описание товара"
                  />
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
                    Местонахождение товара*
                  </Typography>

                  <HintCloud text={text}>
                    <Field
                      className={style.card__input}
                      name={"UNP"}
                      type="text"
                      placeholder="Введите местонахождение товара"
                    />
                  </HintCloud>
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
                    Контактная информация*
                  </Typography>
                  <HintCloud text={text}>
                    <Field
                      className={style.card__input}
                      name={"UNP"}
                      type="text"
                      placeholder="Введите номер телефона"
                    />
                  
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите e-mail"
                  />
                  </HintCloud>
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
                    Условия оплаты*
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"UNP"}
                    type="text"
                    placeholder="Введите условия оплаты"
                  />
                </div>

                <div>
                  <Typography variant="default" tag={"p"}>
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
                  <Typography variant="default" tag={"p"}>
                    Цена, BYN*
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
                    <Typography variant="default" tag={"h3"}>
                      Добавить предложение
                    </Typography>
                  </Button>
                </div>
              </div>

              <div className={style.card__Column}>
                <div>
                  <Typography variant="default" tag={"p"}>
                    Фото товара/услуги*
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
