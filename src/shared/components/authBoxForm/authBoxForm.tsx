import { AuthFormHeader } from "../authFormHeader/AuthFormHeader";
import style from "./authFormBox.module.scss";

interface IBoxFormProps {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
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
