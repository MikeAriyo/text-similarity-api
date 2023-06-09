"use client"; // declare as a client component
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: ReactNode }) => {
  //specifies that component receives children as props which is a react node
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
};
export default Providers;
