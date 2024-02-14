interface StyledButtonProps {
  onClick?: () => void;

  backGroundColor?: string;

  primary?: boolean;

  label: string;
}

import React from "react";

const StyledButton = ({
  primary,
  backGroundColor,
  label,
  ...props
}: StyledButtonProps) => {
  return (
    <>
      <button
        className={`px-4 py-1 ${
          backGroundColor ? backGroundColor : "bg-emerald-600"
        } text-gray-50 transition duration-700 ease-in-out`}
      >
        {label}
      </button>
    </>
  );
};

export default StyledButton;
