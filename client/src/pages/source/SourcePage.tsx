import * as St from "./styled";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import { MainPanel } from "./components";
import { useParams } from "react-router";

export function SourcePage() {
  const { sourceId } = useParams();

  return (
    <St.Wrapper>
      <MainPanel />
      <MarkerPicker allowEdit={true} />
    </St.Wrapper>
  );
}
