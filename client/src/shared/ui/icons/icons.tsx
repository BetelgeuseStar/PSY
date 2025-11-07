import type { HTMLProps } from "react";
import { IconWrapper } from "./IconWrapper.tsx";

export function PlusIcon(props: HTMLProps<HTMLElement>) {
  return (
    <IconWrapper {...props}>
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" />
      </svg>
    </IconWrapper>
  );
}
