export type Person = {
  id: number;
  userId: number;
  isPublic: boolean;
  author: string;
  name: string | null;
  info: string | null;
  photoUrl: string | null;
  sourceId: number | null;
};
