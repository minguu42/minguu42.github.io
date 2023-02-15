export type PostHead = {
  slug: string;
  title: string;
  description: string;
  createdOn: string;
  updatedOn: string;
};

export type PostData = PostHead & {
  contentHTML: string;
};
