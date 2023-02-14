import Head from "next/head";
import React from "react";

import { Header } from "@/components/Header";

import s from "./Home.module.css";

export const Home: React.FC = () => {
  return (
    <div className={s.background}>
      <Head>
        <title>Blog - minguu42</title>
      </Head>
      <Header />
      <main className={s.main}>
        <h1 className={s.heading}>Blog</h1>
      </main>
    </div>
  );
};
