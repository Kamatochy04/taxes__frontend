import { Route, Routes } from "react-router-dom";

import {
  AuthModel,
  Basket,
  Finance,
  Offers,
  Orders,
  PaymentMethods,
  Purchases,
  Support,
} from "@/widgets";
import { Suspense } from "react";

import { Main } from "@/pages/Main";
import { RegisterModel } from "@/widgets/registerModel/ui/ModelRegister";

export const Router = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="offers" element={<Offers />} />
          <Route path="finance" element={<Finance />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payment-methods" element={<PaymentMethods />} />
          <Route path="basket" element={<Basket />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="support" element={<Support />} />
          <Route
            path="auth"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <AuthModel />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <RegisterModel />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
