import { useEffect, useState } from "react";
import { getFile } from "../api/files/getFile.ts";

export function useFileByUrl(url?: string | null) {
  const [fileUrl, setFileUrl] = useState<string>();

  async function getFileFetch() {
    if (!url) return;
    const photoFile = await getFile(url);
    const tempUrl = URL.createObjectURL(photoFile);
    setFileUrl(tempUrl);
  }

  useEffect(() => {
    getFileFetch();
    return () => {
      if (!fileUrl) return;
      URL.revokeObjectURL(fileUrl);
    };
  }, [url]);

  return { fileUrl, refetch: getFileFetch };
}
