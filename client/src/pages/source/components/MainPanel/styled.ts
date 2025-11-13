import styled from "styled-components";
import { Board } from "../../../../shared/ui";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  background: linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%);

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

  gap: 10px;
`;
