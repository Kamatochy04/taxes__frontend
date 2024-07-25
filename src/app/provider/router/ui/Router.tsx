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
import { FirstStep } from "@/features/auth/ui/FirstStep";
import { SecondStep } from "@/features/auth/ui/SecondStep";
import { Step1, Step2, Step3 } from "@/features/signup";
import { Step4 } from "@/features/signup/ui/step4";
import { Step5 } from "@/features/signup/ui/step5";

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
          <Route path="login" element={<AuthModel />}>
            <Route index element={<FirstStep />} />
            <Route path="status" element={<SecondStep />} />
          </Route>
          <Route path="register" element={<RegisterModel />}>
            <Route index element={<Step1 />} />
            <Route path="step-second" element={<Step2 />} />
            <Route path="step-second/step-third" element={<Step3 />} />
            <Route
              path="step-second/step-third/step-fourth"
              element={<Step4 />}
            />
            <Route
              path="step-second/step-third/step-fourth/step-five"
              element={<Step5 />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
