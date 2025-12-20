import type { HTMLProps } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";

export type EditableTextProps = {
  editorValue: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  isReadOnly?: boolean;
  isTextArea?: boolean;
  isLoading?: boolean;
  cursor?: string;
} & HTMLProps<HTMLDivElement>;

export const EditableText = forwardRef(EditableTextInner);

function EditableTextInner(props: EditableTextProps, ref) {
  const {
    onValueChange,
    editorValue = "",
    isReadOnly = false,
    placeholder = "",
    isTextArea = false,
    isLoading = false,
    cursor,
    ...restProps
  } = props;

  const localPlaceholder = isReadOnly ? "" : placeholder;

  return (
    <St.Wrapper {...restProps} ref={ref}>
      {isLoading ? (
        <St.Skeleton style={{ height: isTextArea ? "100%" : 18 }} />
      ) : isTextArea ? (
        <St.TextArea
          value={editorValue}
          onChange={(e) => onValueChange?.(e.target.value)}
          readOnly={isReadOnly}
          placeholder={localPlaceholder}
          style={{ cursor: cursor ? cursor : isReadOnly ? "default" : "text" }}
        />
      ) : (
        <St.Input
          value={editorValue}
          onChange={(e) => onValueChange?.(e.target.value)}
          readOnly={isReadOnly}
          placeholder={localPlaceholder}
          style={{ cursor: cursor ? cursor : isReadOnly ? "default" : "text" }}
        />
      )}
    </St.Wrapper>
  );
}
