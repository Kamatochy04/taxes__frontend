import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsResults } from "@/model";
import { Button } from "@/shared/components/button/Button";
import style from "./details.module.scss";
import { useState } from "react";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import {
  useDeleteProductMutation,
  useNewProductMutation,
  usePatchProductMutation,
} from "@/features/user/api/productsApi";
import { useLocation } from "react-router-dom";

export const Details = () => {

  const location = useLocation();
  const { state } = location;

  let [addProductsResults] = useState<ProductsResults>(
    state !== null
      ? {
          id: `${state.from.results.id}`,
          name: `${state.from.results.name}`,
          description: `${state.from.results.description}`,
          price: `${state.from.results.price}`,
          count: `${state.from.results.count}`,
          category: `${state.from.results.category}`,
          seller: `${state.from.results.seller}`,
          images: [],
        }
      : {
          id: "",
          name: "самолет",
          description: "",
          price: "159000",
          count: "2",
          category: "",
          seller: "157f6679-4750-437c-beb2-e769aa84c408",
          images: [],
        }
  );

  const text = `Информация по добавлению инфы
  - символы
  - количество`;

  const [addProductsResultsData] = useNewProductMutation();
  const [patchProductsResultsData] = usePatchProductMutation();
  const [DeleteProduct] = useDeleteProductMutation();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    DeleteProduct(state.from.results.id);
  };

  return (
    <div className={style.card}>
      <Typography variant="default" tag={"h3"}>
        Новое предложение
      </Typography>

      <Formik<ProductsResults>
        initialValues={addProductsResults}
        onSubmit={(values) => {
          console.log(values);
          state !== null
            ? patchProductsResultsData(values)
            : addProductsResultsData(values);
        }}
      >
        {() => (
          <Form id="forma">
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
                    form="forma"
                    className={style.card__input__description}
                    name="description"
                    placeholder="Введите описание товара"
                  ></textarea>
                </div>


                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                  count
                  </Typography>
                  <Field
                    className={style.card__input}
                    name={"count"}
                    type="text"
                    placeholder="count"
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
                    <Button type="submit" variant="bigBlue">Добавить предложение</Button>
                  </div>
                ) : (
                  <div className={style.card__Button}>
                    <Button type="submit" variant="normalBlue">Сохранить</Button>
                    <Button variant="normalWhite" onClick={handleRemove}>
                      Удалить
                    </Button>
                  </div>
                )}
              </div>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
