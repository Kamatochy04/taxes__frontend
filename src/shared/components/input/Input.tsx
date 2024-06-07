import style from "./input.module.scss";

type Props = {
  placeholder: string;
  type: string;
};

export const Input = ({ placeholder, type }: Props) => {
  return (
    <input placeholder={placeholder} type={type} className={style.input} />
  );
};
