import { Outlet } from "react-router-dom";

import { DefaultImg } from "@/shared/assets/icons/DefaultImg";
import { Header } from "@/widgets";

import style from "./main.module.scss";

export const Main = () => {
  return (
    <>
      <Header />
      <main className={style.prev}>
        <DefaultImg />
      </main>
      <Outlet />

      <section className={style.cards}>
        <div className="container">
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
      <footer className={style.footer}>
        <div className="container">
          <div className={style.footer__line}></div>
        </div>
      </footer>
    </>
  );
};
