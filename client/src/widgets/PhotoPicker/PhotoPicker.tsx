import * as St from "./styled";
import type { HTMLProps } from "react";
import { forwardRef, useState } from "react";
import { EditIcon } from "../../shared/icons";
import type { UploadProps } from "antd";
import { beforeUpload } from "./utils.ts";

type Props = HTMLProps<HTMLImageElement>;

export const PhotoPicker = forwardRef(PhotoPickerInner);

function PhotoPickerInner({ src, ...restProps }: Props, ref) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      // ЗДЕСЬ ЗАПРОС НА ПОЛУЧЕНИЕ ФАЙЛА
      const url = "";
      setLoading(false);
      setImageUrl(url);
    }
  };

  return (
    <St.Wrapper {...restProps} ref={ref}>
      <St.Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        <St.Img src={src} />
        <St.ActiveLayer>
          <EditIcon />
        </St.ActiveLayer>
      </St.Upload>
    </St.Wrapper>
  );
}
