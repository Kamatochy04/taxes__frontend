import { Route, Routes } from "react-router-dom";

import {
  Basket,
  Account,
  MainModel,
  Finance,
  Offers,
  Orders,
  PaymentMethods,
  Purchases,
  Support,
} from "@/widgets";
import { Main } from "@/pages/Main";
import {
  DeletUserStepOne,
  DeletUserStepTwo,
  DeletUserStepThree,
  LoginStepOne,
  LoginStepTwo,
  RegisterStepFive,
  RegisterStepFour,
  RegisterStepOne,
  RegisterStepThree,
  RegisterStepTwo,
} from "@/features";
import { LoginForgetPassword } from "@/features/user/ui";

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
          <Route path="account" element={<Account />} />
          <Route path="delete-account" element={<MainModel />}>
            <Route index element={<DeletUserStepOne />} />
            <Route path="check-mail" element={<DeletUserStepTwo />} />
            <Route path="status" element={<DeletUserStepThree />} />
          </Route>
          <Route path="login" element={<MainModel />}>
            <Route index element={<LoginStepOne />} />
            <Route path="status" element={<LoginStepTwo />} />
            <Route path="forget-password" element={<LoginForgetPassword />} />
          </Route>
          <Route path="register" element={<MainModel />}>
            <Route index element={<RegisterStepOne />} />
            <Route path="step-second" element={<RegisterStepTwo />} />
            <Route
              path="step-second/step-third"
              element={<RegisterStepThree />}
            />
            <Route
              path="step-second/step-third/step-fourth"
              element={<RegisterStepFour />}
            />
            <Route
              path="step-second/step-third/step-fourth/step-five"
              element={<RegisterStepFive />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
