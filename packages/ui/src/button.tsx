"use client";

import { ReactNode } from "react";

import ButtonMUI from '@mui/material/Button';

interface ButtonProps {
  //children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "text" | "contained" | "outlined";
  text?: string;
}

export const Button = ({
  
  onClick,
  disabled = false,
  variant = "contained",
  text = "No text",
}: ButtonProps) => {
  return (
      <ButtonMUI variant={variant} onClick={onClick} disabled={disabled}>
        {text}
      </ButtonMUI>
  );
};



export default Button;