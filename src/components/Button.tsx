"use client";
import React, { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  bgColor?: "default" | "dark green";
}

const Button: FC<ButtonProps> = ({ children, onClick, type = "button", disabled = false, bgColor = "default" }) => {
  const color =
    bgColor === "dark green"
      ? { bg: "bg-[#1F723B]", bgHover: "hover:bg-[#196530]", textColor: "text-white" }
      : { bg: "bg-[#41F27C]", bgHover: "hover:bg-[#38d96f]", textColor: "text-[#4D4E4E]" };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full py-2 text-2xl font-bebas ${color.textColor} ${color.bg} ${
        color.bgHover
      } rounded-lg transition-all duration-200 ease-in-out ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
