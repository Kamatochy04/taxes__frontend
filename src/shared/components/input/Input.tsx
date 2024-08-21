import { ErrorMessage, Field } from "formik";
import { ComponentProps, forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";

import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

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
    const [inputType, setInputType] = useState(type);
    const [showPassword, setShowPassword] = useState(true);
    const [eyeComponent, setEyeComponent] = useState<React.ReactElement>(
      <VisibilityOutlinedIcon />
    );
    const handelClick = () => {
      setShowPassword(!showPassword);
      if (showPassword) {
        setEyeComponent(<VisibilityOffOutlinedIcon />);
        setInputType("text");
      } else {
        setEyeComponent(<VisibilityOutlinedIcon />);
        setInputType("password");
      }
    };

    return (
      <div className={style.container}>
        <label htmlFor={name}>{label}</label>
        <div className={style.wrapper}>
          <Field
            id={name}
            name={name}
            type={inputType}
            className={cn(className)}
            {...props}
            ref={ref}
            disabled={disabled}
          />
          <span className={style.eye} onClick={handelClick}>
            {type == "password" ? eyeComponent : null}
          </span>
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