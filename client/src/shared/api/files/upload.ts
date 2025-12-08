import { message } from "antd";
import { getApi } from "../api.ts";

export async function upload(options) {
  const { onSuccess, onError, file, onProgress } = options;

  const formData = new FormData();
  formData.append("file", file); // 'file' should match the field name expected by your backend

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      // Add any authorization tokens here
      // 'Authorization': 'Bearer your-token',
    },
    onUploadProgress: (event) => {
      const percent = Math.floor((event.loaded / event.total) * 100);
      onProgress({ percent }); // Update Ant Design's progress bar
    },
  };

  try {
    const response = await getApi().post<string>("/upload", formData, config);

    onSuccess(response.data, file); // Notify Ant Design of success
    message.success(`${file.name} uploaded successfully.`);

    return response.data;
  } catch (err) {
    onError(err);
    message.error(`${file.name} upload failed.`);
    console.error("Upload error:", err);
  }
}
