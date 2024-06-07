import style from "./button.module.scss";

type Props = {
  text: string;
  event: () => void;
};

export const Button = ({ text, event }: Props) => {
  return (
    <button className={style.button} onClick={event}>
      {text}
    </button>
  );
};
