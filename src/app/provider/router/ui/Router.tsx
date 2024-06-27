import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/app/layouts/main/MainLayout";

import { Suspense } from "react";
import { RegisterModel } from "@/widgets/registerModel";

export const Router = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainLayout />}>
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
