import { Outlet } from "react-router-dom";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { Dialog } from "@/shared/components/dialog/Dialog";

export const MainModel = () => {
  return (
    <Dialog>
      <AuthBoxForm>
        <Outlet />
      </AuthBoxForm>
    </Dialog>
  );
};
