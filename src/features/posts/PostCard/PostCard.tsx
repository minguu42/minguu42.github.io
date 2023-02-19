import Link from "next/link";
import React from "react";

import type { PostHead } from "@/features/posts/type";
import s from "./PostCard.module.css";

type Props = PostHead;

export const PostCard: React.FC<Props> = ({ slug, title, published }) => {
  return (
    <li className={s.container}>
      <h2 className={s.title}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <time dateTime={published} className={s.published}>
        {published.replaceAll("-", " / ")}
      </time>
    </li>
  );
};
