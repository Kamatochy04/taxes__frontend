import { ComponentProps, ComponentPropsWithRef, FC } from "react";
import styles from "./checkbox.module.scss";

type CheckboxProps = ComponentProps<"input"> &
  ComponentPropsWithRef<"input"> & {
    children?: React.ReactNode;
  };

export const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      <span className={styles.checkbox__custom}></span>
      {children}
    </label>
  );
};
