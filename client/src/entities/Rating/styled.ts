import styled from "styled-components";
import { StarIcon } from "../../shared/icons";

export const Wrapper = styled.div`
  display: flex;
  gap: 1px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-bottom: 1px;
`;

export const ActiveStarIcon = styled(StarIcon)`
  width: 25px;
  height: 25px;
`;

export const InactiveStarIcon = styled(StarIcon)`
  width: 25px;
  height: 25px;

  fill: #626262;
`;

export const StarWrapper = styled.div<{ $readonly: boolean }>`
  width: 24px;
  cursor: ${({ $readonly }) => ($readonly ? "default" : "pointer")};

  svg {
    transition: 0.05s all;
  }

  &:hover {
    transform: ${({ $readonly }) => ($readonly ? "none" : "scale(1.1)")};
  }

  &:active {
    transform: ${({ $readonly }) => ($readonly ? "none" : "scale(1.2)")};
  }
`;
