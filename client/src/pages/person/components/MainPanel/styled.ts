import styled from "styled-components";
import { Board, Text } from "../../../../shared/ui";
import { PhotoPicker } from "../../../../widgets/PhotoPicker";
import { projectColors } from "../../../../shared/utils";

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
  object-fit: cover;
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
  gap: 5px;

  width: 590px;
  height: 195px;
`;

export const ExtraInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-style: italic;
  color: #9e3954;
  cursor: default;

  width: 100%;
`;

export const ExtraInfoLine = styled.div`
  display: flex;
  align-items: center;

  overflow: hidden;
  width: 100%;
`;

export const ExtraInfoText = styled(Text)`
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
