import Head from "next/head";
import React from "react";

import { Card } from "@/components/Card";
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
        <Card
          title="Go Conference 2023 体験レポ"
          description="Go Conference 2023に参加した体験を皆さんに共有します！"
          date="2023/06/02"
        />
      </main>
    </div>
  );
};
