import styled from "styled-components";
import { Board } from "../../../../shared/ui";
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
