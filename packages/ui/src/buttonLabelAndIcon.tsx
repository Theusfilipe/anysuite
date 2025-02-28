"use client";

import { ReactNode } from "react";
//import styles from "./modules/Button.module.css";

import ButtonMUI from '@mui/material/Button';

import Handyman from "@mui/icons-material/Handyman";
import Inventory from "@mui/icons-material/Inventory2";
import Group from "@mui/icons-material/Group";

import Unknown from "@mui/icons-material/DeviceUnknown";

const iconMap = {
  Handyman: <Handyman />,
  Inventory: <Inventory />,
  Group: <Group />,
  Unknown: <Unknown />,
};

interface ButtonProps {
  //children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon?:"Handyman"|"Inventory"| "Group"| "Unknown";
  text?: string;
}

export const ButtonLabelAndIcon = ({
  //children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  icon = "Unknown", // Default icon,
  text = "No text",
}: ButtonProps) => {
  return (

      <ButtonMUI variant="contained" endIcon={iconMap[icon]} size="large" onClick={onClick} disabled={disabled}>
        {text}
      </ButtonMUI>
  );
};

export default ButtonLabelAndIcon;