import { cva, VariantProps } from "class-variance-authority";
import { ErrorMessage, Field } from "formik";
import { ComponentProps, forwardRef } from "react";
import cn from "classnames";
import cnBind from "classnames/bind";
import style from "./input.module.scss";

const cx = cnBind.bind(style);

const InputStyles = cva(["w-full"]);
type InputProps = ComponentProps<"input"> &
  VariantProps<typeof InputStyles> & {
    label?: string;
    name: string;
    error?: boolean;
    ok?: boolean;
    errorMessage?: string;
  };

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, name, type, disabled, error, errorMessage, ok, ...props }, ref) => {
    const className = cx("input", { err: error, ok: ok });

    return (
      <div className={style.container}>
        <label htmlFor={name}>{label}</label>
        <div className={style.wrapper}>
          <Field
            id={name}
            name={name}
            type={type}
            className={cn(className)}
            {...props}
            ref={ref}
            disabled={disabled}
          />
        </div>
        <p className={style.errorMessage}>{errorMessage}</p>
        <ErrorMessage
          name={name}
          component="p"
          className={style.errorMessage}
        />
      </div>
    );
  }
);

// const handelClick = () => {
//   setShowPassword(!showPassword);
//   if (showPassword) {
//     setInputType("text");
//   } else {
//     setInputType("password");
//   }
// };
{
  /* <span className={style.eye} onClick={handelClick}>
            {eyeComponent}
          </span> */
}
