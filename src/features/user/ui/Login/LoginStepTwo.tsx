import { useNavigate } from "react-router-dom";

import { Typography } from "@/shared/components/typography/Typography";
import { Button } from "@/shared/components/button/Button";

import style from "./auth.module.scss";
import { useGetUserInfQuery } from "../../api/user.api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../userData/userDataSlice";

export const LoginStepTwo = () => {
  const navigate = useNavigate();
  //const { data } = useGetUserInfQuery();
  //console.log(data);
  //const dispath = useDispatch();

  /*useEffect(() => {
    if (data) {
      dispath(setUserData(data));
    }
  },[data]);*/

  return (
    <>
      <div className={style.box}>
        <Typography variant={"h3"} tag={"h3"}>
          Вход выполнен успешно!
        </Typography>
        <Button
          variant={"register"}
          onClick={() => {
            //{data !== undefined ? dispath(setUserData(data)) : ''};
            
            //window.location.reload();
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
