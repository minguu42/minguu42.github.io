import type { ParsedUrlQuery } from "querystring";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { Layout } from "@/components/Layout";
import { getAllPostSlugs, getPostData } from "@/features/posts/posts";

import s from "./Post.module.css";

type Props = {
  postData: {
    title: string;
    createdOn: string;
    contentHTML: string;
  };
};

export const Post: NextPage<Props> = ({ postData }) => {
  return (
    <Layout>
      <main className={s.article}>
        <h1>{postData.title}</h1>
        <div>{postData.createdOn}</div>
        {/* rome-ignore lint/security/noDangerouslySetInnerHtml: Markdownから生成したHTMLを埋め込む必要がある*/}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
        <Link href="/">戻る</Link>
      </main>
    </Layout>
  );
};

export default Post;

type Params = ParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const slugs = getAllPostSlugs();
  const paths = slugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  // TODO: paramsがundefinedの時の処理を追加する
  const postData = await getPostData(params?.slug as string);
  return {
    props: {
      postData,
    },
  };
};
