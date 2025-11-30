import styled from "styled-components";
import { Board, Text } from "../../../shared/ui";

export const Wrapper = styled(Board)`
  width: 700px;
  max-height: 540px;
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  flex-grow: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  span {
    text-align: left;
  }
  gap: 15px;
  margin-bottom: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 5px;

  span {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const TitleLevel = styled(Text)`
  color: #3ba4a9;
`;

export const TitleFunction = styled(Text)``;

export const Value = styled(Text)`
  font-weight: 500;
  font-size: 20px;
`;

export const ExtraInfo = styled(Text)``;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SourceName = styled(Text)`
  font-size: 18px;
  font-style: italic;
  color: #3ba4a9;
  cursor: default;
`;

export const RatingWrapper = styled.div`
  display: flex;
`;
