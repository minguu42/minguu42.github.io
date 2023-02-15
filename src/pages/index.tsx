import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { getSortedPostHeads } from "@/features/posts/posts";
import { PostHead } from "@/features/posts/type";

import s from "./Home.module.css";

type Props = {
  allPostHeads: PostHead[];
};

export const Home: NextPage<Props> = ({ allPostHeads }) => {
  return (
    <div className={s.background}>
      <Head>
        <title>Blog - minguu42</title>
      </Head>
      <Header />
      <main className={s.main}>
        <h1 className={s.heading}>Blog</h1>
        {allPostHeads.map(({ slug, title, createdOn }) => (
          <Card key={slug} title={title} description="" date={createdOn} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostHeads = getSortedPostHeads();
  return {
    props: {
      allPostHeads,
    },
  };
};

export default Home;
