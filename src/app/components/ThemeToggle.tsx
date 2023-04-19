"use client";

import { useTheme } from "next-themes";
import { FC } from "react";

interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { setTheme } = useTheme();

  return <div>Theme Toggle</div>;
};

export default ThemeToggle;
