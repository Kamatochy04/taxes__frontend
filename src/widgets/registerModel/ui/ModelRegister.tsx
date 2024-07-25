import { Outlet } from "react-router-dom";
import AuthBoxForm from "@/shared/components/authBoxForm/authBoxForm";
import { Dialog } from "@/shared/components/dialog/Dialog";

export const RegisterModel = () => {
  return (
    <Dialog>
      <AuthBoxForm>
        <Outlet />
      </AuthBoxForm>
    </Dialog>
  );
};

{
  /* <div className={style.model__window}>
        <AuthFormHeader />

      </div> */
}
