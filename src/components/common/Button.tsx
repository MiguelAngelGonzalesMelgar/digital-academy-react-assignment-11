import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./common.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({ children, variant="primary", ...props}: ButtonProps) => {
  let variantClass;

  switch (variant) {
    case "primary":
      variantClass = styles.buttonPrimary;
      break;
    case "secondary":
      variantClass = styles.buttonSecondary;
      break;
    case "outline":
      variantClass = styles.buttonOutline;
      break;
  default:
    variantClass = styles.buttonPrimary;
    break;
  }

  return (
    <button className={`${styles.buttonBase} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
