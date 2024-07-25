import { Dialog } from "@mui/material";
import { AuthFormHeader } from "@/shared/components/authFormHeader/AuthFormHeader";
import style from "./registerModel.module.scss";
import { Outlet } from "react-router-dom";

export const RegisterModel = () => {
  return (
    <Dialog open={true} className={style.model}>
      <div className={style.model__window}>
        <AuthFormHeader />
        <Outlet />
      </div>
    </Dialog>
  );
};
