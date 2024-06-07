import { Footer, Header, Information } from "@/widgets";

import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Information />
      <Outlet />
      <Footer />
    </>
  );
};
