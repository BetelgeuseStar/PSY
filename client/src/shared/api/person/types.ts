export type Person = {
  id: number;
  userId: number;
  isPublic: boolean;
  name: string | null;
  info: string | null;
  photoUrl: string | null;
  sourceId: number | null;
  pickedMarkerIds: number[];
};
