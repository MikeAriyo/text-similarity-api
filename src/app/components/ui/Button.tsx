import { cva } from "class-variance-authority";
import { FC } from "react";

interface ButtonProps {}

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900"
);

const Button: FC<ButtonProps> = ({}) => {
  return <div>Button</div>;
};

export default Button;
