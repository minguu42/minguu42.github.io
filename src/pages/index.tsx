import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import { getSortedPostHeads } from "@/features/posts/posts";
import { PostCard } from "@/features/posts/PostCard";
import type { PostHead } from "@/features/posts/type";

import s from "./Home.module.css";

type Props = {
  allPostHeads: PostHead[];
};

export const Home: NextPage<Props> = ({ allPostHeads }) => {
  return (
    <Layout>
      <Head>
        <title>Blog - minguu42</title>
      </Head>
      <main className={s.main}>
        <h1 className={s.heading}>Blog</h1>
        <ul>
          {allPostHeads.map((p) => (
            <PostCard
              key={p.slug}
              slug={p.slug}
              title={p.title}
              published={p.published}
              updated={p.updated}
            />
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostHeads = getSortedPostHeads();
  return {
    props: {
      allPostHeads,
    },
  };
};
