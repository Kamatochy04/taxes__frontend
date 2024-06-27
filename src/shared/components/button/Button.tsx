import style from "./button.module.scss";

type Props = {
  children: React.ReactNode;
  event?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

export const Button = ({ children, event, type }: Props) => {
  return (
    <button className={style.button} onClick={event} type={type}>
      {children}
    </button>
  );
};
