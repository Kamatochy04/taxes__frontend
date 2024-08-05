import { Outlet } from "react-router-dom";

import { Footer, Header, SideBar } from "@/widgets";

import { ContainerField } from "@/shared/components/container/ContainerField";

import style from "./main.module.scss";

export const Main = () => {
  return (
    <>
      <Header />
      <section className={style.main}>
        <SideBar />
        <ContainerField>
          <Outlet />
        </ContainerField>
      </section>

      <Footer />
    </>
  );
};
