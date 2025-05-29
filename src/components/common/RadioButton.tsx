import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  register: UseFormRegister<any>
}

const RadioButton = ({ label, name, value, register, ...props}: RadioButtonProps) => {
  return (
    <label className="radio-button-label">
      <input
      type="radio"
      value={value}
      {...register(name)}
      {...props}
      className="radio-button-input"
      />
      <span className="radio-button-label-text">
        {label}
      </span>
    </label>
  )
}

export default RadioButton;
