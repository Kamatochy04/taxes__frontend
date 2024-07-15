import { Outlet } from "react-router-dom";

import { Footer, Header, SideBar } from "@/widgets";

import { Container } from "@/shared/components/container/Container";

import style from "./main.module.scss";

export const Main = () => {
  return (
    <>
      <Header />

      <section className={style.main}>
        <SideBar />
        <Container>
          <Outlet />
        </Container>
      </section>

      <Footer />
    </>
  );
};
