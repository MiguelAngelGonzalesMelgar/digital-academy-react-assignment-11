import type { InputHTMLAttributes } from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>
  error?: FieldError;
}

const InputField = ({ label, name, register, error, ...props}: InputFieldProps) => {
  return (
    <div className="input-field-container">
      <label htmlFor={name} className="input-field-name">
        {label}
      </label>
      <input
      id={name}
      {...register(name)}
      {...props}
      className={`input-field-input ${error ? 'input-field-input--error' : ""}`}
      />
      {error && <p className="input-field-error-message">
        {error.message}
      </p>}
    </div>
  )
};

export default InputField;