import { ParsedUrlQuery } from "querystring";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { getAllPostSlugs, getPostData } from "@/features/posts/posts";

type Props = {
  postData: {
    title: string;
    createdOn: string;
    contentHTML: string;
  };
};

export const Post: NextPage<Props> = ({ postData }) => {
  return (
    <div>
      <h1>{postData.title}</h1>
      <div>{postData.createdOn}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
    </div>
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