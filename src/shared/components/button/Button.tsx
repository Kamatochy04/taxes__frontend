import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import style from "./button.module.scss";

const ButtonStyles = cva();

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof ButtonStyles> & {
    variant: string;
    children: React.ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, children, disabled, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={`${style[variant]} ${style.button}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
