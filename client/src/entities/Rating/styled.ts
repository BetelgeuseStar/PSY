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

  fill: #dfb300;
`;

export const InactiveStarIcon = styled(StarIcon)`
  width: 25px;
  height: 25px;

  fill: #626262;
`;

export const StarWrapper = styled.div`
  width: 24px;
  cursor: pointer;

  svg {
    transition: 0.05s all;
  }

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.2);
  }
`;
