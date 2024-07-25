import { AuthFormHeader } from "../authFormHeader/AuthFormHeader";
import style from "./authFormBox.module.scss";

interface IBoxFormProps {
  children: JSX.Element;
}

export default function AuthBoxForm({ children }: IBoxFormProps) {
  return (
    <div className={style.box}>
      <AuthFormHeader />
      {children}
    </div>
  );
}
