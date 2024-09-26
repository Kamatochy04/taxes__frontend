import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";
import { useGetUserQuery } from "../../api/userRegister";

import style from "./auth.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../userData/userDataSlice";

export const LoginStepTwo = () => {
  const { data } = useGetUserQuery();

  const navigate = useNavigate();
  const dispath = useDispatch();
  useEffect(() => {
    if (data) {
      dispath(
        setUserData({
          id: data.id,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          patronymic: data.patronymic,
          unp: data.unp,
          registration_address: data.registration_address,
          residential_address: data.residential_address,
          date_of_birth: data.date_of_birth,
          avatar: data.avatar,
        })
      );
    }
  });

  return (
    <>
      <div className={style.box}>
        <Typography variant={"h3"} tag={"h3"}>
          Вход выполнен успешно!
        </Typography>
        <Button
          variant={"register"}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant="button" tag={"p"}>
            Далее
          </Typography>
        </Button>
      </div>
    </>
  );
};
