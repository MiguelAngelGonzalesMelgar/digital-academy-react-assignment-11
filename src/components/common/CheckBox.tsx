import type { InputHTMLAttributes } from "react";
import type { UseFormRegister } from "react-hook-form";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string;
  name: string;
  register: UseFormRegister<any>
}

const CheckBox = ({ label, name, register, ...props}: CheckBoxProps) => {
  return (
    <label className="checkbox-container">
      <input 
      type="checkbox" 
      {...register(name)}
      {...props}
      className="checkbox-input"
      />
      <span className="checkbox-label">
        {label}
      </span>
    </label>
  )
}
export default CheckBox;
