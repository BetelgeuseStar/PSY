import { TypesNavPanel } from "../../widgets/TypesNavPanel";
import { useState } from "react";
import type { TypesNavPanelState } from "../../shared/types/TypeNavPanel.ts";
import { PsyFunction } from "../../shared/types/TypeNavPanel.ts";

export function MarkersPage() {
  const [panelState, setPanelState] = useState<TypesNavPanelState>({
    type: PsyFunction.Will,
    number: 1,
  });

  return (
    <>
      <h1 style={{ color: "white" }}>Страница с маркерами</h1>
      <TypesNavPanel state={panelState} onChange={setPanelState} />
    </>
  );
}
