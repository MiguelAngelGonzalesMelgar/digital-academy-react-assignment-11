import type { SelectHTMLAttributes } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./common.module.css"

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
  }[];
  register: UseFormRegister<any>
  error?: FieldError;
}

const SelectField = ({ label, name, options, register, error, ...props}: SelectFieldProps) => {
  return (
    <div className={styles["select-field-container"]}>
      <label htmlFor={name} className={styles["select-field-Label"]}>
        {label}
      </label>
      <select
      id="{name"
      {...register(name)}
      {...props}
      className={`${styles["select-field-input"]} ${error ? styles.error : ""}`}
      >
        <option value="">
          Select...
        </option>
        {options.map((option) => (
          <option 
          key={option.value}
          value={option.value}
          >
            {option.label}
          </option>
          ))}
      </select>
      {error && 
      <p
      className={styles[`selected-field-error-message`]}
      >
        {error.message}
      </p>}
    </div>
  )
};
export default SelectField
