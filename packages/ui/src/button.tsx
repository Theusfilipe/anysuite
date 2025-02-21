"use client";

import { ReactNode } from "react";
import styles from "./modules/Button.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

export const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};


export default Button;