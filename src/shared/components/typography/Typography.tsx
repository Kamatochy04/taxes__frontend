import style from "./typography.module.scss";

type TypographyVariant =
  | "button"
  | "h3"
  | "h3_center"
  | "check-box"
  | "price"
  | "price_card"
  | "default"
  | "h3-account";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span" | "label";

export type TypographyProps<Tag extends TypographyTag> =
  React.ComponentProps<Tag> & {
    variant?: TypographyVariant;
    tag: TypographyTag;
    children: React.ReactNode;
  };

export const Typography = <Tag extends TypographyTag = "div">({
  variant = "default",
  tag = "div",
  children,
  className,
}: TypographyProps<Tag>) => {
  const Component = tag ?? "div";

  return (
    <Component className={`${style[variant]} ${className}`}>
      {children}
    </Component>
  );
};
