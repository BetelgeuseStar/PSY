import styled from "styled-components";
import { Text } from "../../shared/ui";
import { projectColors } from "../../shared/utils";
import SkeletonInput from "antd/es/skeleton/Input";

export const Wrapper = styled.div`
  display: flex;
  align-items: start;

  overflow: hidden;
  width: fit-content;

  font-size: 18px;
  font-style: italic;
  color: #9e3954;
  cursor: default;
`;

export const TextLine = styled(Text)`
  font-size: 18px;
  font-style: italic;
  color: ${projectColors.darkText};
  cursor: default;

  margin-left: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  line-height: 21px;
`;

export const SkeletonText = styled(SkeletonInput)`
  width: 100% !important;
`;
