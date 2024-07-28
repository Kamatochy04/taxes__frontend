import { useEffect, useState } from "react";
import style from "./Timer.module.scss";
import { useAppSelector } from "@/app/redux/hook";
import { useSignupMutation } from "@/features/user/api/userRegister";

export default function Timer() {
  const [seconds, setSeconds] = useState(59);
  const [signup] = useSignupMutation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === 0) {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);
  interface IDataUser {
    email: string;
    password: string;
    repeat_password: string;
    secret_word: string;
    first_name: string;
    last_name: string;
    patronymic?: string;
  }
  const data1Selector = useAppSelector((store) => store.step1);
  const data2Selector = useAppSelector((store) => store.step2);
  const DataUser: IDataUser = { ...data1Selector, ...data2Selector };

  const onRequestCode = (data: IDataUser) => {
    signup(data)
      .then((response) => {
        if (response.error) {
          return console.log(response.error);
        }

        if (response.data) {
          localStorage.setItem(
            "confirm_code_id",
            response.data.confirm_code_id
          );
        } else {
          alert("Пользватель с таким почтовым адресом уже зарегистрирован!");
        }
      })
      .catch(console.log);
  };

  return (
    <>
      {" "}
      {seconds === 0 ? (
        <p
          className={style.title_request}
          onClick={() => {
            onRequestCode(DataUser);
          }}
        >
          Запросить код
        </p>
      ) : (
        <div className={style.time}>
          Запросить код повторно можно через 0:{seconds}
        </div>
      )}
    </>
  );
}
