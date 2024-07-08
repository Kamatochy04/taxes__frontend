import { Outlet } from "react-router-dom";

import { Header, SideBar } from "@/widgets";

import style from "./main.module.scss";
import { DefaultImg } from "@/shared/assets/icons/DefaultImg";
import { useEffect, useState } from "react";

export const Main = () => {
  const token = localStorage.getItem("accessToken");
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (token) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [token]);

  return (
    <>
      <Header />
      {isShow ? (
        <>
          <div className={style.wrapper}>
            <SideBar />
            <div className={style.wrapper__item}>
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        <section className={style.cards}>
          <div className="container">
            <Outlet />
            <div className={style.cards__container}>
              <div className={style.cards__row}>
                <div className={style.cards__item}>
                  <DefaultImg />
                </div>
                <div className={style.cards__item}>
                  <DefaultImg />
                </div>
                <div className={style.cards__item}>
                  <DefaultImg />
                </div>
                <div className={style.cards__item}>
                  <DefaultImg />
                </div>
              </div>
              <div className={style.cards__row}>
                <div className={style.cards__card}>
                  <span>
                    <DefaultImg />
                  </span>
                  <div className={style.cards__skeleton}>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                  </div>
                </div>
                <div className={style.cards__block}>
                  <div className={style.cards__skeleton}>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                  </div>
                </div>
                <div className={style.cards__block}>
                  <div className={style.cards__skeleton}>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                    <div className={style.cards__line}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* <footer className={style.footer}>
        <div className="container">
          <div className={style.footer__line}></div>
        </div>
      </footer> */}
    </>
  );
};
