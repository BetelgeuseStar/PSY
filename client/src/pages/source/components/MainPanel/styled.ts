import styled from "styled-components";
import { Board, Text } from "../../../../shared/ui";
import { PhotoPicker } from "../../../../widgets/PhotoPicker";

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

export const Photo = styled(PhotoPicker)`
  width: 300px;
  height: 300px;

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

export const SourceText = styled(Text)`
  font-size: 18px;
  font-style: italic;
  color: #3ba4a9;
  cursor: default;
  margin-top: 12px;
`;
