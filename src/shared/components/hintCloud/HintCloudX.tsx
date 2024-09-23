import style from "./hintCloud.module.scss";

type HintVariant =
  | "UNP"
  | "img"
  | "input"
  | "item"
  | "price"
  | "price_card"
  | "default"
  | "h3-account";

type HintTag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span" | "label";

export type HintProps<Tag extends HintTag> =
  React.ComponentProps<Tag> & {
    variant?: HintVariant;
    tag: HintTag;
    children: React.ReactNode;
    text: React.ReactNode;
  };

export const HintCloudX = <Tag extends HintTag = "div">({
  variant = "item",
  tag = "div",
  children,
  text,
}: HintProps<Tag>) => {
  const Component = tag ?? "div";

  return (
    <Component className={`${style[variant]}`} data-title={text}>
      {children}
    </Component>
  );
};
