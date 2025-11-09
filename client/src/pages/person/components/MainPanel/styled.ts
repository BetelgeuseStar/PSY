import styled from "styled-components";
import { Board, Button } from "../../../../shared/ui";

export const Wrapper = styled.div`
  display: flex;
`;

export const ExtraPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;

export const ExtraButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Photo = styled.img`
  width: 300px;
  height: 300px;

  border: 2px solid #b38687;
  box-shadow: 0px 4px 31.2px 10px rgba(179, 134, 135, 0.5);
  border-radius: 15px;

  margin-right: 20px;
`;

export const MainPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoPanel = styled(Board)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;

  width: 590px;
  height: 195px;
`;

export const ExtraButton = styled(Button)`
  min-width: 50px;
  min-height: 50px;

  & > span {
    padding-top: 2px;
    width: 25px;

    fill: #b38687;

    transition: all 0.3s;
  }

  & svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    & span {
      fill: #3ba4a9;
      transition: all 0.3s;
    }
  }

  &:active {
    & span {
      fill: #2a7276;
      transition: all 0.3s;
    }
  }
`;
