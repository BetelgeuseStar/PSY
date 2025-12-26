import styled from "styled-components";
import { PageWrapper } from "../../shared/ui";

export const Wrapper = styled(PageWrapper)`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;

export const PanelsWrapper = styled.div`
  display: flex;
  gap: 100px;
`;
