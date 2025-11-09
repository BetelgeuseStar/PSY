import * as St from "./styled.ts";
import type { FunctionPickerState } from "../../shared/types/TypeNavPanel.ts";
import { PsyFunction } from "../../shared/types/TypeNavPanel.ts";

export type FunctionPickerProps = {
  state: FunctionPickerState;
  onChange: (state: FunctionPickerState) => void;
};

export function FunctionPicker({ state, onChange }: FunctionPickerProps) {
  return (
    <St.Wrapper>
      <St.Bar>
        <St.WillButton
          onClick={() => onChange({ ...state, type: PsyFunction.Will })}
          active={state.type == PsyFunction.Will ? "true" : "false"}
        >
          Воля
        </St.WillButton>
        <St.PhysicsButton
          onClick={() => onChange({ ...state, type: PsyFunction.Physics })}
          active={state.type == PsyFunction.Physics ? "true" : "false"}
        >
          Физика
        </St.PhysicsButton>
        <St.EmotionButton
          onClick={() => onChange({ ...state, type: PsyFunction.Emotion })}
          active={state.type == PsyFunction.Emotion ? "true" : "false"}
        >
          Эмоция
        </St.EmotionButton>
        <St.LogicsButton
          onClick={() => onChange({ ...state, type: PsyFunction.Logics })}
          active={state.type == PsyFunction.Logics ? "true" : "false"}
        >
          Логика
        </St.LogicsButton>
      </St.Bar>
      <St.Bar style={{ marginLeft: "30px" }}>
        <St.Button
          onClick={() => onChange({ ...state, number: 1 })}
          active={state.number == 1 ? "true" : "false"}
        >
          Первая
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, number: 2 })}
          active={state.number == 2 ? "true" : "false"}
        >
          Вторая
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, number: 3 })}
          active={state.number == 3 ? "true" : "false"}
        >
          Третья
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, number: 4 })}
          active={state.number == 4 ? "true" : "false"}
        >
          Четвертая
        </St.Button>
      </St.Bar>
    </St.Wrapper>
  );
}
