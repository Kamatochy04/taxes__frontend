import style from "./input.module.scss";

type Props = {
  placeholder: string;
  type: string;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ placeholder, type, onChange, value, name }: Props) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
