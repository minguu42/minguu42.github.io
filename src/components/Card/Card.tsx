import Link from "next/link";
import React from "react";

import type { PostHead } from "@/features/posts/type";

import s from "./Card.module.css";

type Props = PostHead;

export const Card: React.FC<Props> = ({ slug, title, description, createdOn }) => (
  <li>
    <Link href={`/blog/${slug}`} className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{description}</p>
      <div className={s.spacer} />
      <p className={s.date}>{createdOn}</p>
    </Link>
  </li>
);
