import { useEffect, useState } from "react";
import { useGetFile } from "../api/files/getFile.ts";

export function useFileByUrl(url?: string | null) {
  const [fileUrl, setFileUrl] = useState<string>();

  const { data: file, refetch, isFetching, dataUpdatedAt } = useGetFile(url);

  useEffect(() => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setFileUrl(objectUrl);

    return () => {
      if (!fileUrl) return;
      URL.revokeObjectURL(fileUrl);
    };
  }, [dataUpdatedAt]);

  return { fileUrl, refetch, isFetching };
}
