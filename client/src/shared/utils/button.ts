import { css } from "styled-components";

export function getButtonColorStyle(color: string, shadow: string) {
  return css`
    color: ${color} !important;
    border: 2px solid ${color} !important;
    box-shadow: 0px 4px 31.2px 10px ${shadow} !important;
  `;
}

export function getClickableIconStyle() {
  return css`
    cursor: pointer;

    & > svg {
      fill: #b38687;

      transition: all 0.3s;
    }
    &:hover {
      & svg {
        fill: #3ba4a9;
      }
    }

    &:active {
      & svg {
        fill: #2a7276;
      }
    }
  `;
}
