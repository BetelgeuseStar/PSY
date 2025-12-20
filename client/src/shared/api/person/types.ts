export type Person = {
  id: number;
  userId: number;
  isPublic: boolean;
  author: string;
  type: number[];
  name: string | null;
  info: string | null;
  photoUrl: string | null;
  sourceId: number | null;
};
