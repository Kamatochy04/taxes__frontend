import { Field, Form, Formik } from "formik";
import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import { PhotoType } from "@/model";
import style from "./account.module.scss";
import productImg from "@/shared/assets/img/Rectangle 803.png";

import { useState } from "react";
import { usePhotoMutation } from "@/features/user/api/AccountApi";

export const ProfilePhoto = () => {
  const [addPhoto] = useState<PhotoType>({
    photo: "",
  });

  const [addPersonalData] = usePhotoMutation();

  return (
    <>
      <Formik<PhotoType>
        initialValues={addPhoto}
        onSubmit={(values) => {
          addPersonalData(values);
        }}
      >
        {({ isValid }) => (
          <Form style={{ gap: "16px" }}>
            <div className={style.card__Line}>
              <label htmlFor="ava" >
              <img src={productImg} alt="product" className={style.card__ava}/>
                <Field
                  className={style.card__photo}
                  autocomplete="off"
                  id="ava"
                  name={"photo"}
                  type="file"
                  placeholder="загрузить фото"
                />
              </label>

              <div className={style.card__Fild}>
                <Typography variant="p-card-date" tag={"p"}>
                  Создайте автопортрет при помощи веб камеры или найдите фото на
                  своём компьютере
                </Typography>
                <Button type="submit" variant={"text"} disabled={!isValid}>
                  <Typography variant="link-account" tag={"p"}>
                    Изменить
                  </Typography>
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
