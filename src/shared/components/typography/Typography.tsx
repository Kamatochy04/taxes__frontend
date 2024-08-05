import style from "./typography.module.scss";

type TypographyVariant =
  | "subscribe-input"
  | "link-account"
  | "button-register"
  | "h3-register"
  | "h3-login_delete"
  | "h4-login_delete"
  | "link-register"
  | "subscribe-text"
  | "ghost-text"
  | "button-text";
type TypographyTag = "h1" | "h2" | "h3" | "h4" | "p" | "div" | "span" | "label";

export type TypographyProps<Tag extends TypographyTag> =
  React.ComponentProps<Tag> & {
    variant: TypographyVariant;
    tag: TypographyTag;
    children: React.ReactNode;
  };

export const Typography = <Tag extends TypographyTag = "div">({
  variant,
  tag = "div",
  children,
}: TypographyProps<Tag>) => {
  const Component = tag ?? "div";

  return <Component className={style[variant]}>{children}</Component>;
};
