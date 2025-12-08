import * as St from "./styled";
import type { HTMLProps } from "react";
import { forwardRef } from "react";
import { EditIcon } from "../../shared/icons";
import { beforeUpload } from "./utils.ts";
import { upload } from "../../shared/api";

type Props = HTMLProps<HTMLImageElement> & {
  onChangeUrl: (url: string) => void;
  fileName: string;
};

export const PhotoPicker = forwardRef(PhotoPickerInner);

function PhotoPickerInner(
  { src, fileName, onChangeUrl, ...restProps }: Props,
  ref,
) {
  async function uploadHandler(options) {
    const url = (await upload(options, fileName)) as string;
    onChangeUrl(url);
  }

  return (
    <St.Wrapper {...restProps} ref={ref}>
      <St.Upload beforeUpload={beforeUpload} customRequest={uploadHandler}>
        <St.Img src={src} />
        <St.ActiveLayer>
          <EditIcon />
        </St.ActiveLayer>
      </St.Upload>
    </St.Wrapper>
  );
}
