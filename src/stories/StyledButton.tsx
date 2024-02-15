interface StyledButtonProps {
  onClick?: () => void;

  backGroundColor?: string;

  primary: string;

  label: string;
}

import React from "react";
import "./StyledButton.css";

const StyledButton = ({
  primary,
  backGroundColor,
  label,
  ...props
}: StyledButtonProps) => {
  return (
    <>
      <button className={primary}>{label}</button>
    </>
  );
};

export default StyledButton;
