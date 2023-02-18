import Link from "next/link";
import React from "react";

import type { PostHead } from "@/features/posts/type";
import s from "./PostCard.module.css";

type Props = PostHead;

export const PostCard: React.FC<Props> = ({ slug, title, createdOn }) => {
  return (
    <li className={s.container}>
      <h2 className={s.title}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <time dateTime={createdOn} className={s.published}>
        {createdOn}
      </time>
    </li>
  );
};
