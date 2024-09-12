import { Field, Form, Formik } from "formik";
import { FC, useState } from "react";

import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import productImg from "@/shared/assets/img/no_photo.jpg";

import style from "./account.module.scss";

import { useAddAvatarMutation } from "@/features/user/api/AccountApi";
import { AvatarType } from "@/model";

interface Type {
  Avatar: string;
}

export const ProfilePhoto: FC<Type> = ({ Avatar }) => {

  const [imageURL, setImageURL] = useState<any>(
    productImg
  );

  console.log(Avatar);
  console.log(imageURL);

  const [addPhoto] = useState<AvatarType>({
    avatar: Avatar,
  });

  const [AddAvatar] = useAddAvatarMutation();

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

  return (
    <>
      <Formik<AvatarType>
        initialValues={addPhoto}
        onSubmit={(values) => {          
          values.avatar = imageURL;
          console.log(values);
          AddAvatar(values);
        }}
      >
        {() => (
          <Form style={{ gap: "16px" }}>
            <div className={style.card__Line}>

              <label htmlFor="ava" >
              <img src={ imageURL } alt="product" className={style.card__ava}/>
              </label>

                <Field
                  className={style.card__photo}
                  id="ava"
                  onChange={handleOnChange}
                  name="avatar"
                  accept="image/jpeg,image/jpg,image/png"
                  type="file"
                  placeholder="Добавить фото"
                />             

              <div className={style.card__Fild}>
                <Typography variant="default" tag={"p"}>
                  Создайте автопортрет при помощи веб камеры или найдите фото на
                  своём компьютере
                </Typography>
                <Button type="submit" variant={"text"}>
                  <Typography variant="default" tag={"p"}>
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
