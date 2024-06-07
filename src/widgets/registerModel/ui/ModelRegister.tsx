import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "@/shared/components/input/Input";
import { Button } from "@/shared/components/button/Button";

import style from "./registerModel.module.scss";

export const RegisterModel = () => {
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    console.log(isChecked);
  };

  const nextStep = () => {};

  const prevStep = () => {
    navigate("/");
  };

  return (
    <div className={style.model}>
      <div className={style.model__window}>
        <h1>Регистрация</h1>
        <form className={style.model__form}>
          <Input placeholder={"Имя"} type={"text"} />
          <Input placeholder={"Фамилия"} type={"text"} />
          <Input placeholder={"Отчество"} type={"text"} />

          <Button text={"Далее"} event={nextStep} />
          <Button text={"Назад"} event={prevStep} />

          <div className={style.model__checkbox}>
            <input
              type="checkbox"
              name="my-checkbox"
              checked={isChecked}
              onChange={handleChange}
              className={style.model__input}
              id="scales"
            />
            <label htmlFor="scales">Согласие с условиями</label>
          </div>
        </form>
      </div>
    </div>
  );
};
