import styled from "styled-components";
import { Board, Text } from "../../shared/ui";
import { PlusIcon } from "../../shared/icons";

export const Wrapper = styled(Board)`
  width: 300px;
  height: 300px;
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;

  flex-direction: column;

  cursor: pointer;

  &:hover {
    border: 2px solid #3ba4a9;
    box-shadow: 0px 4px 31.2px 10px rgba(59, 164, 169, 0.5);
  }

  &:active {
    border: 2px solid #2a7276;
    box-shadow: 0px 4px 31.2px 10px rgba(41, 104, 108, 0.5);
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Photo = styled.img`
  width: 256px;
  height: 230px;

  border: 2px solid #b38687;
  border-radius: 5px;

  object-fit: cover;
`;

export const Name = styled(Text)`
  font-size: 20px;
`;

export const Type = styled(Text)`
  font-size: 24px;
`;

export const Icon = styled(PlusIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  & > svg {
    fill: #b38687;
    height: 80px;
    width: 80px;

    transition: all 0.3s;
  }
`;

export const AddText = styled(Text)`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #b38687;

  transition: all 0.3s;

  user-select: none;
`;

export const AddWrapper = styled(Wrapper)`
  &:hover {
    & svg {
      fill: #3ba4a9;
    }

    & span {
      color: #3ba4a9;
    }
  }

  &:active {
    & svg {
      fill: #2a7276;
    }

    & span {
      color: #2a7276;
    }
  }
`;
