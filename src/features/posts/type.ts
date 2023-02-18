export type PostHead = {
  slug: string;
  title: string;
  published: string;
  updated: string;
};

export type PostData = PostHead & {
  contentHTML: string;
};
