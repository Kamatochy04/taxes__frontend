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
  ({ variant, children, disabled, className, ...props }, ref) => {
    return (
      <button
        disabled={disabled}
        ref={ref}
        className={`${style.button} ${style[variant]}  ${
          disabled && style.disabled
        } ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);