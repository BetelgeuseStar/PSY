import { useParams } from "react-router";
import { MainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";

export function PersonPage() {
  const { personId } = useParams();

  return (
    <St.Wrapper>
      <MainPanel />
      <MarkerPicker />
    </St.Wrapper>
  );
}
