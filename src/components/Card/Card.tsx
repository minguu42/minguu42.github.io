import React from "react";

import s from "./Card.module.css";

type Props = {
  title: string;
  description: string;
  date: string;
};

export const Card: React.FC<Props> = ({ title, description, date }) => (
  <div className={s.container}>
    <h2 className={s.title}>{title}</h2>
    <p className={s.description}>{description}</p>
    <div className={s.spacer} />
    <p className={s.date}>{date}</p>
  </div>
);
