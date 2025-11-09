import { useParams } from "react-router";
import { MainPanel } from "./components";
import * as St from "./styled.ts";

export function PersonPage() {
  const { personId } = useParams();

  return (
    <St.Wrapper>
      <MainPanel />
    </St.Wrapper>
  );
}
