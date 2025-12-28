import * as St from "./styled";
import type { HTMLProps } from "react";
import { forwardRef } from "react";
import { EditIcon } from "../../shared/icons";
import { beforeUpload } from "./utils.ts";
import { upload } from "../../shared/api";
import { Spin } from "antd";
import { VisibilityStatusLayer } from "../../entities/VisibilityStatusLayer";

type Props = HTMLProps<HTMLImageElement> & {
  onChangeUrl: (url: string) => void;
  fileName: string;
  isLoading: boolean;
  isPublic: boolean;
  allowEdit: boolean;
};

export const PhotoPicker = forwardRef(PhotoPickerInner);

function PhotoPickerInner(
  {
    src,
    fileName,
    onChangeUrl,
    isLoading,
    isPublic,
    allowEdit,
    ...restProps
  }: Props,
  ref,
) {
  async function uploadHandler(options) {
    const url = (await upload(options, fileName)) as string;
    onChangeUrl(url);
  }

  return (
    <St.Wrapper {...restProps} ref={ref}>
      {isLoading ? (
        <Spin spinning />
      ) : allowEdit ? (
        <St.Upload beforeUpload={beforeUpload} customRequest={uploadHandler}>
          <St.Img src={src} />
          <VisibilityStatusLayer isVisible={isPublic} />

          <St.ActiveLayer>
            <EditIcon />
          </St.ActiveLayer>
        </St.Upload>
      ) : (
        <St.Img src={src} />
      )}
    </St.Wrapper>
  );
}
