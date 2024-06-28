import { Route, Routes } from "react-router-dom";

import { AuthModel } from "@/widgets";
import { Suspense } from "react";

import { Main } from "@/pages/Main";
import { RegisterModel } from "@/widgets/registerModel/ui/ModelRegister";

export const Router = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            path="auth"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <AuthModel />
              </Suspense>
            }
          ></Route>
          <Route
            path="register"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <RegisterModel />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};
