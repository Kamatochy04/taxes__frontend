import { FC, useState } from "react";

import { Button } from "@/shared/components/button/Button";
import { Typography } from "@/shared/components/typography/Typography";
import productImg from "@/shared/assets/img/no_photo.jpg";

import style from "./account.module.scss";

import {
  useAddAvatarMutation,
  useDeleteAvatarMutation,
} from "@/features/user/api/AccountApi";

// http://84.38.182.213:1337

interface Type {
  Avatar: string;
}

export const ProfilePhoto: FC<Type> = ({ Avatar }) => {

  let av = 'http://84.38.182.213:1337' + `${Avatar}`;

  const [imageURL, setImageURL] = useState<any>(Avatar !== null ? av : productImg);
  const [image, setImage] = useState<any>('');

  const [AddAvatar] = useAddAvatarMutation();
  const [deleteAvatar] = useDeleteAvatarMutation();


  const handleOnChange = (event: any) => {
    setImage(event.target.files[0]);

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

  const handleUploud = () => {
    if (image == productImg) {
      alert("добавте фото");
      return;
    }

    deleteAvatar(imageURL);
    const formData = new FormData();
    formData.append("avatar", image);
    AddAvatar(formData);
  };

  const deleteImage = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    deleteAvatar(imageURL);
    setImageURL(productImg);
  };

  return (
    <>
      <div className={style.card__Line}>
        <label htmlFor="ava" className={style.card__photoX}>
          <img src={imageURL} alt="product" />
          { imageURL !== productImg ? <button className={style.card__photoDelete} onClick={deleteImage}>Удалить фото</button> : ''}
        </label>

        <input
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
            Создайте автопортрет при помощи веб камеры или найдите фото на своём
            компьютере
          </Typography>
          <Button onClick={handleUploud} variant={"smallBlue"}>
            <Typography variant="default" tag={"p"}>
              Изменить
            </Typography>
          </Button>
        </div>
      </div>
    </>
  );
};
