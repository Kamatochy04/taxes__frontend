import style from "./RegistrForm.module.scss";
interface IRegistrForm {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  children: JSX.Element;
}

export default function RegistrForm({ children, onSubmit }: IRegistrForm) {
  return (
    <form style={style} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
