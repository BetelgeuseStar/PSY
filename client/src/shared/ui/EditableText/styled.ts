import styled from "styled-components";
import { projectColors } from "../../utils";
import SkeletonInput from "antd/es/skeleton/Input";

export const Wrapper = styled.div`
  width: 100%;
  font-size: 20px;
  line-height: 20px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;

  & > * {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    text-align: left;
    color: #ffffff;
    padding: 0;
    &::placeholder {
      color: #b38687;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Input = styled.input`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${projectColors.editable};

  &:read-only {
    color: ${projectColors.white};
    cursor: default;
  }
`;

export const TextArea = styled.textarea`
  font-size: 18px;
  resize: none;
  color: ${projectColors.editable};

  scrollbar-color: ${projectColors.default} transparent;
  scrollbar-width: thin;

  &:read-only {
    color: ${projectColors.white};
    cursor: default;
  }
`;

export const Skeleton = styled(SkeletonInput)`
  width: 100% !important;
`;
