import styled from "styled-components";
import { Board } from "../../../../shared/ui";
import { CheckIcon as OuterCheckIcon } from "../../../../shared/ui/icons";

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ActiveZone = styled.div<{ $disabled: boolean }>`
  ${({ $disabled }) => {
    if (!$disabled) {
      return `
        &:hover > div {
          border: 2px solid #3ba4a9 !important;
          box-shadow: 0px 4px 31.2px 10px rgba(59, 164, 169, 0.5) !important;
    
          color: #3ba4a9 !important;
        }
    
        &:active > div {
          border: 2px solid #2a7276 !important;
          box-shadow: 0px 4px 31.2px 10px rgba(41, 104, 108, 0.5) !important;
        }
        
        cursor: pointer;
      `;
    }
  }}

  flex-grow: 1;
  display: flex;
  gap: 10px;
`;

export const CheckboxWrapper = styled(Board)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

export const Checkbox = styled.div`
  width: 24px;
  height: 24px;

  background: #fffdfd;
  border: 1px solid #b38687;

  padding: 2px 0;
`;

export const CheckIcon = styled(OuterCheckIcon)`
  fill: #51b13a;
`;

export const TextWrapper = styled(Board)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  flex-grow: 1;

  user-select: none;
`;

export const RatingWrapper = styled(Board)`
  display: flex;
  width: 150px;
`;
