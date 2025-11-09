import { FunctionPicker } from "../../widgets/FunctionPicker";
import { useState } from "react";
import type { FunctionPickerState } from "../../shared/types/TypeNavPanel.ts";
import { PsyFunction } from "../../shared/types/TypeNavPanel.ts";

export function MarkersPage() {
  const [pickerState, setPickerState] = useState<FunctionPickerState>({
    type: PsyFunction.Will,
    number: 1,
  });

  return (
    <>
      <h1 style={{ color: "white" }}>Страница с маркерами</h1>
      <FunctionPicker state={pickerState} onChange={setPickerState} />
    </>
  );
}
