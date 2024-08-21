import style from "./hintCloud.module.scss";

interface IHintCloudProps {
  children: React.ReactNode;
  text: string;
}

export const HintCloud = ({ children, text }: IHintCloudProps) => {
  return (
    <div
      className={style.item}
      data-title={text}
    >
      {children}
    </div>
  );
};