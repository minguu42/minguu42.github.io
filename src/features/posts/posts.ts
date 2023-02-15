import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import type { PostData, PostHead } from "@/features/posts/type";

const postsDir = path.join(process.cwd(), "posts");

export const getSortedPostHeads = (): PostHead[] => {
  const fileNames = fs.readdirSync(postsDir);
  const allPostsData = fileNames.map((f) => {
    const slug = f.replace(/\.md$/, "");

    const fullPath = path.join(postsDir, f);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const matterResult = matter(fileContents);
    // TODO: エラー処理を追加する

    return {
      slug,
      ...(matterResult.data as { title: string; createdOn: string }),
    };
  });

  return allPostsData.slice().sort((a, b) => (a.createdOn < b.createdOn ? 1 : -1));
};

export const getAllPostSlugs = (): string[] => {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((f) => f.replace(/\.md$/, ""));
};

export const getPostData = async (slug: string): Promise<PostData> => {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const matterResult = matter(fileContents);
  // TODO: エラー処理を追加する

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHTML = processedContent.toString();

  return {
    slug,
    ...(matterResult.data as { title: string; createdOn: string }),
    contentHTML,
  };
};
