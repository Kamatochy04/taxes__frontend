import { Outlet } from "react-router-dom";

import { Footer, Header, SideBar } from "@/widgets";

import style from "./main.module.scss";
import { Container } from "@/shared/components/container/Container";

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

