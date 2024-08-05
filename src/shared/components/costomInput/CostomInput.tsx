import { ComponentType, forwardRef } from "react";

import { SerachIcon } from "./SearchInput";

import style from "./input.module.scss";

type Variant = "header";

type inputType = ComponentType<"input"> & {
  variant: Variant;
};

export const CostomInput = forwardRef<HTMLInputElement, inputType>(
  ({ variant, ...props }, ref) => {
    return (
      <div className={`${style.wrapper} ${style[variant]}`}>
        {variant === "header" ? (
          <div className={style.search}>
            <SerachIcon />
          </div>
        ) : null}
        <input ref={ref} {...props} type="text" />
      </div>
    );
  }
);
