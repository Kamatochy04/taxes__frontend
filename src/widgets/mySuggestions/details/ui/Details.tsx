import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsImages, ProductsResults } from "@/model";
import { Button } from "@/shared/components/button/Button";
import productImg from "@/shared/assets/img/no_photo.jpg";
import style from "./details.module.scss";
import { useState } from "react";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import { useDeleteProductMutation, useNewProductMutation, usePatchProductMutation } from "@/features/user/api/productsApi";
import { useLocation } from "react-router-dom";

export const Details = () => {


  //image--------------------

  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>();
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  const handleOnChange = (event: {
    preventDefault: () => void;
    target: { files: string | any[] };
  }) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: {
    dataTransfer: any;
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length) {
      fileReader.readAsDataURL(event.dataTransfer.files[0]);
    }
  };

  const handleDragEmpty = (event: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    event.preventDefault();
    event.stopPropagation();
  };
  //-----------------

  const location = useLocation();
  const { state } = location;

  let photo =
    state !== null
      ? state.from.results.images.map((item: ProductsImages) => item.photo)
      : [];
      
  let [addProductsResults] = useState<ProductsResults>(
    state !== null
      ? {
          id: `${state.from.results.id}`,
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
  const [patchProductsResultsData] = usePatchProductMutation();
  const [DeleteProduct] = useDeleteProductMutation();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    DeleteProduct(state.from.results.id)
  }

  return (
    <div className={style.card}>
      <Typography variant="default" tag={"h3"}>
        Новое предложение
      </Typography>

      <Formik<ProductsResults>
        initialValues={addProductsResults}
        onSubmit={(values) => { state !== null ? patchProductsResultsData(values) :
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
                    <Button variant="bigBlue">Добавить предложение</Button>
                  </div>
                ) : (
                  <div className={style.card__Button}>
                    <Button variant="normalBlue">Сохранить</Button>
                    <Button variant="normalWhite" onClick={handleRemove}>Удалить</Button>
                  </div>
                )}
              </div>

              <div className={style.card__Column}>
                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Фото товара/услуги*
                  </Typography>

                  <label
                    htmlFor="ava"
                    className={style.card__input__photo__big}
                  >
                    <img
                      src={
                        photo[0] != undefined
                          ? photo[0]
                          : imageURL
                          ? imageURL
                          : productImg
                      }
                      alt="product"
                      onDrop={handleDrop}
                      onDragEnter={handleDragEmpty}
                      onDragOver={handleDragEmpty}
                    />
                  </label>
                  <Field
                    required
                    className={style.card__input__file}
                    id="ava"
                    onChange={handleOnChange}
                    name="img"
                    accept="image/jpeg,image/png,image/gif"
                    type="file"
                    placeholder="Добавить фото"
                  />
                </div>

                <div className={style.card__input__Indent_photo}>
                  <label htmlFor="ava1" className={style.card__input__photo}>
                    <img
                      src={photo[1] != undefined ? photo[1] : productImg}
                      alt="product"
                    />
                  </label>
                  <label htmlFor="ava1" className={style.card__input__photo}>
                    <img
                      src={photo[2] != undefined ? photo[2] : productImg}
                      alt="product"
                    />
                  </label>
                  <label htmlFor="ava1" className={style.card__input__photo}>
                    <img
                      src={photo[3] != undefined ? photo[3] : productImg}
                      alt="product"
                    />
                  </label>
                  <Field
                    className={style.card__input__file}
                    id="ava1"
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
