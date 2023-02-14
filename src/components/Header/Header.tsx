import Image from "next/image";
import React from "react";

import { SocialButton } from "@/components/SocialButton";

import s from "./Header.module.css";

export const Header: React.FC = () => (
  <header className={s.container}>
    <Image src="/icon.png" alt="" width={48} height={48} />
    <div className={s.spacer} />
    <SocialButton
      icon={<Image src="/twitter.svg" alt="Twitterロゴ" width={24} height={24} />}
      href="https://twitter.com/minguu42"
    />
    <SocialButton
      icon={<Image src="/github.svg" alt="GitHubロゴ" width={24} height={24} />}
      href="https://github.com/minguu42"
    />
    <SocialButton
      icon={<Image src="/zenn.svg" alt="Zennロゴ" width={24} height={24} />}
      href="https://zenn.dev/minguu42"
    />
  </header>
);
