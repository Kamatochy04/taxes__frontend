import { Field, Form, Formik } from "formik";
import { Typography } from "@/shared/components/typography/Typography";
import { ProductsImages, ProductsResults } from "@/model";
import { Button } from "@/shared/components/button/Button";
import productImg from "@/shared/assets/img/no_photo.jpg";
import style from "./details.module.scss";
import { useState } from "react";
import { HintCloud } from "@/shared/components/hintCloud/HintCloud";
import {
  useDeleteProductMutation,
  useNewProductMutation,
  usePatchProductMutation,
} from "@/features/user/api/productsApi";
import { useLocation } from "react-router-dom";
import { useDeleteImagesMutation } from "@/features/user/api/imagesApi";

export const Details = () => {
  //image--------------------

  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>(
    productImg
  );
  const [imageURL1, setImageURL1] = useState<string | ArrayBuffer | null>(productImg);
  const [imageURL2, setImageURL2] = useState<string | ArrayBuffer | null>(productImg);
  const [imageURL3, setImageURL3] = useState<string | ArrayBuffer | null>(productImg);

  const handleOnChange = (event: {
    preventDefault: () => void;
    target: { files: string | any[] };
  }) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImageURL(fileReader.result);
    };

    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  const handleOnChange1 = (event: {
    preventDefault: () => void;
    target: { files: string | any[] };
  }) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImageURL1(fileReader.result);
    };

    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  const handleOnChange2 = (event: {
    preventDefault: () => void;
    target: { files: string | any[] };
  }) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImageURL2(fileReader.result);
    };

    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  const handleOnChange3 = (event: {
    preventDefault: () => void;
    target: { files: string | any[] };
  }) => {
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
      setImageURL3(fileReader.result);
    };

    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      fileReader.readAsDataURL(file);
    }
  };

  //-----------------

  const location = useLocation();
  const { state } = location;

  let photoID =
    state !== null
      ? state.from.results.images.map((item: ProductsImages) => item.id)
      : [];

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
          count: `${state.from.results.count}`,
          category: `${state.from.results.category}`,
          seller: `${state.from.results.seller}`,
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
  const [DeleteImages] = useDeleteImagesMutation();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    DeleteProduct(state.from.results.id);
  };

  const deleteImage0 = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    DeleteImages(photoID[0]);
    setImageURL(productImg);
  };

  const deleteImage1 = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    DeleteImages(photoID[1]);
    setImageURL1(productImg);
  };

  const deleteImage2 = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    DeleteImages(photoID[2]);
    setImageURL2(productImg);
  };

  const deleteImage3 = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    DeleteImages(photoID[3]);
    setImageURL3(productImg);
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
                    name="description"
                    placeholder="Введите описание товара"
                  />
                </div>

                <div className={style.card__Indent}>
                  <Typography variant="default" tag={"p"}>
                    Местонахождение товара*
                  </Typography>

                  <HintCloud text={text}>
                    <Field
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
                      className={style.card__input}
                      name={"phone_number"}
                      type="text"
                      placeholder="Введите номер телефона"
                    />

                    <Field
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
                      src={photo[0] != undefined ? photo[0] : imageURL}
                      alt="product"
                    />
                    <button className={style.card__photoDelete} onClick={deleteImage0}>Удалить фото</button>
                  </label>

                  <Field
                    className={style.card__input__file}
                    id="ava"
                    onChange={handleOnChange}
                    name="images[0].photo[0]"
                    accept="image/jpeg,image/jpg,image/png"
                    type="file"
                    placeholder="Добавить фото"
                  />
                </div>

                <div className={style.card__input__Indent_photo}>
                  <label htmlFor="ava1" className={style.card__input__photo}>
                    <img
                      src={
                        photo[1] != undefined
                          ? photo[1]
                          : imageURL1
                      }
                      alt="product"
                    />
                    <button className={style.card__photo1Delete} onClick={deleteImage1}>Удалить фото</button>
                  </label>
                  <Field
                    className={style.card__input__file}
                    id="ava1"
                    onChange={handleOnChange1}
                    name="images[1].photo[1]"
                    accept="image/jpeg,image/jpg,image/png"
                    type="file"
                    placeholder="Добавить фото"
                  />
                  <label htmlFor="ava2" className={style.card__input__photo}>
                    <img
                      src={photo[2] != undefined ? photo[2] : imageURL2}
                      alt="product"
                    />
                    <button className={style.card__photo2Delete} onClick={deleteImage2}>Удалить фото</button>
                  </label>
                  <Field
                    className={style.card__input__file}
                    id="ava2"
                    onChange={handleOnChange2}
                    name="images[2].photo[2]"
                    accept="image/jpeg,image/jpg,image/png"
                    type="file"
                    placeholder="Добавить фото"
                  />
                  <label htmlFor="ava3" className={style.card__input__photo}>
                    <img
                      src={photo[3] != undefined ? photo[3] : imageURL3}
                      alt="product"
                    />
                    <button className={style.card__photo3Delete} onClick={deleteImage3}>Удалить фото</button>
                  </label>
                  <Field
                    className={style.card__input__file}
                    id="ava3"
                    onChange={handleOnChange3}
                    name="images[3].photo[3]"
                    accept="image/jpeg,image/jpg,image/png"
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
