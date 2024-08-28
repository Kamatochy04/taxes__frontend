import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsResults } from "@/model";
import { Button } from "@/shared/components/button/Button";

import style from "./details.module.scss";
import { useState } from "react";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import { useNewProductMutation } from "@/features/user/api/productsApi";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const location = useLocation();
  const { state } = location;

  let [addProductsResults] = useState<ProductsResults>(
    state !== null
      ? {
          id: "",
          name: `${state.from.results.name}`,
          description: `${state.from.results.description}`,
          price: `${state.from.results.price}`,
          count: "",
          category: `${state.from.results.category}`,
          seller: "",
          images: [],
        }
      : {
          id: "",
          name: "",
          description: "",
          price: "",
          count: "",
          category: "",
          seller: "",
          images: [],
        }
  );

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
                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Название товара/услуги *
                  </Typography>

                  <HintCloud text={text}>
                    <Field
                      required
                      className={style.card__input}
                      name={"name"}
                      type="text"
                      placeholder="Введите название товара/услуги"
                    />
                  </HintCloud>
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Категория*
                  </Typography>
                  <Field
                    required
                    className={style.card__input}
                    name={"category"}
                    type="text"
                    placeholder="Введите категорию товара"
                  />
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Описание*
                  </Typography>
                  <textarea
                    required
                    className={style.card__input__description}
                    name={"description"}
                    placeholder="Введите описание товара"
                  />
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Местонахождение товара*
                  </Typography>

                  <HintCloud text={text}>
                    <Field
                      required
                      className={style.card__input}
                      name={"location"}
                      type="text"
                      placeholder="Введите местонахождение товара"
                    />
                  </HintCloud>
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Контактная информация*
                  </Typography>
                  <HintCloud text={text}>
                    <Field
                      required
                      className={style.card__input}
                      name={"phone_number"}
                      type="text"
                      placeholder="Введите номер телефона"
                    />

                    <Field
                      required
                      className={style.card__input}
                      name={"e-mail"}
                      type="text"
                      placeholder="Введите e-mail"
                    />
                  </HintCloud>
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Условия оплаты*
                  </Typography>
                  <Field
                    required
                    className={style.card__input}
                    name={"payment_terms"}
                    type="text"
                    placeholder="Введите условия оплаты"
                  />
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Условия доставки
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"delivery_terms"}
                    type="text"
                    placeholder="Введите условия доставки"
                  />
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Цена, BYN*
                  </Typography>
                  <Field
                    required
                    className={style.card__input}
                    name={"price"}
                    type="text"
                    placeholder="Введите цену"
                  />
                </div>

                {state === null ? (
                  <div className={style.card__Button}>
                    <Button variant="bigBlue">
                        Добавить предложение
                    </Button>
                  </div>
                ) : (
                  <div className={style.card__Button}>
                    <Button variant="normalBlue">
                        Сохранить
                    </Button>
                    <Button variant="normalWhite">
                        Удалить
                    </Button>
                  </div>
                )}

              </div>

              <div className={style.card__Column}>
                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Фото товара/услуги*
                  </Typography>
                  <Field
                    required
                    className={style.card__input__photo__big}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                </div>

                <div className={style.card__input__Indent_photo}>
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
