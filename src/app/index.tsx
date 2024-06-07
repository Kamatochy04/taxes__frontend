import { BrowserRouter } from "react-router-dom";

import { Router } from "./provider/router";

import "./global.scss";

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};
