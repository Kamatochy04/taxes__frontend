import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { Dialog } from "@/shared/components/dialog/Dialog";

import { Outlet } from "react-router-dom";

export const RegisterModel = () => {
  return (
    <Dialog>
      <AuthBoxForm>
        <Outlet />
      </AuthBoxForm>
    </Dialog>
  );
};
