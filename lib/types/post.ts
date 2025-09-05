export type PostListItem = {
  id: string;
  title: string;
  decided: boolean;
  views: number;
};
export type PostListPage = {
  items: PostListItem[];
  nextCursor: string | null;
};
