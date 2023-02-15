import { clsx } from "clsx";
import React from "react";

import us from "@/styles/utils.module.css";

import s from "./SocialButton.module.css";

type Props = React.ComponentPropsWithoutRef<"a"> & {
  icon: React.ReactNode;
};

export const SocialButton: React.FC<Props> = ({ icon, href }) => (
  <a href={href} className={s.container}>
    <div className={s.outline}>
      <div className={clsx(us.stateLayerBase, s.stateLayer)} />
      {icon}
    </div>
  </a>
);
