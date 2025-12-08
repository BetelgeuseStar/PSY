import { message } from "antd";
import type { FileType } from "./types.ts";

export const beforeUpload = (file: FileType) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("Вы можете загрузить только JPG/PNG файл");
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error("Картинка должна быть меньше 5 Мб");
  }
  return isJpgOrPng && isLt2M;
};
