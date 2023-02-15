export type PostHead = {
  slug: string;
  title: string;
  createdOn: string;
};

export type PostData = PostHead & {
  contentHTML: string;
};
