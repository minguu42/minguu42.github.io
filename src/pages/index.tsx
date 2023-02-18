import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import { getSortedPostHeads } from "@/features/posts/posts";
import { PostCard } from "@/features/posts/PostCard";
import { PostHead } from "@/features/posts/type";

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
        {allPostHeads.map(({ slug, title, description, createdOn, updatedOn }) => (
          <PostCard
            key={slug}
            slug={slug}
            title={title}
            description={description}
            createdOn={createdOn}
            updatedOn={updatedOn}
          />
        ))}
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
