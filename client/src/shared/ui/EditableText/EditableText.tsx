import type { HTMLProps } from "react";
import { forwardRef } from "react";
import * as St from "./styled.ts";

export type EditableTextProps = {
  editorValue: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  isReadOnly?: boolean;
  isTextArea?: boolean;
} & HTMLProps<HTMLDivElement>;

export const EditableText = forwardRef(EditableTextInner);

function EditableTextInner(props: EditableTextProps, ref) {
  const {
    onValueChange,
    editorValue = "",
    isReadOnly = false,
    placeholder = "",
    isTextArea = false,
    ...restProps
  } = props;

  return (
    <St.Wrapper {...restProps} ref={ref}>
      {isTextArea ? (
        <St.TextArea
          value={editorValue}
          onChange={(e) => onValueChange(e.target.value)}
          readOnly={isReadOnly}
          placeholder={placeholder}
        />
      ) : (
        <St.Input
          value={editorValue}
          onChange={(e) => onValueChange(e.target.value)}
          readOnly={isReadOnly}
          placeholder={placeholder}
        />
      )}
    </St.Wrapper>
  );
}
