import React from "react";

import { Header } from "@/components/Header";

import s from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => (
  <div className={s.background}>
    <div className={s.container}>
      <Header />
      {children}
    </div>
  </div>
);
