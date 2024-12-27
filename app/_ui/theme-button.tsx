"use client";
import React from "react";
import { useTheme, ThemeMode } from "@/app/_context/theme-provider";

type ThemeButtonProps = {
  value: ThemeMode;
  ariaLabel: string;
  title: string;
};
function ThemeButton({ value, ariaLabel, title }: Readonly<ThemeButtonProps>) {
  const { setTheme } = useTheme();
  let bgColor;
  if (value === "dark") {
    bgColor = "bg-black";
  } else if (value === "light") {
    bgColor = "bg-white";
  } else {
    bgColor = "bg-amber-900";
  }
  return (
    <button
      className={`h-3 w-3 xl:h-5 xl:w-5 border  border-gray-500 ${bgColor} rounded-full`}
      aria-label={ariaLabel}
      title={title}
      onClick={() => setTheme(value)}
    ></button>
  );
}

export default ThemeButton;
