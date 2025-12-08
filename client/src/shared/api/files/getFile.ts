import { getApi } from "../api.ts";

export async function getFile(url: string) {
  const response = await getApi().post<File>(
    `/download`,
    {
      url,
    },
    { responseType: "blob" },
  );

  return response.data as File;
}
