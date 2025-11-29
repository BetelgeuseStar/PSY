import * as St from "./styled.ts";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";

export type FunctionPickerProps = {
  state: PsyType;
  onChange: (state: PsyType) => void;
};

export function FunctionPicker({ state, onChange }: FunctionPickerProps) {
  return (
    <St.Wrapper>
      <St.Bar>
        <St.WillButton
          onClick={() => onChange({ ...state, psyFunction: PsyFunctions.Will })}
          active={state.psyFunction == PsyFunctions.Will ? "true" : "false"}
        >
          Воля
        </St.WillButton>
        <St.PhysicsButton
          onClick={() =>
            onChange({ ...state, psyFunction: PsyFunctions.Physics })
          }
          active={state.psyFunction == PsyFunctions.Physics ? "true" : "false"}
        >
          Физика
        </St.PhysicsButton>
        <St.EmotionButton
          onClick={() =>
            onChange({ ...state, psyFunction: PsyFunctions.Emotion })
          }
          active={state.psyFunction == PsyFunctions.Emotion ? "true" : "false"}
        >
          Эмоция
        </St.EmotionButton>
        <St.LogicsButton
          onClick={() =>
            onChange({ ...state, psyFunction: PsyFunctions.Logics })
          }
          active={state.psyFunction == PsyFunctions.Logics ? "true" : "false"}
        >
          Логика
        </St.LogicsButton>
      </St.Bar>
      <St.Bar style={{ marginLeft: "30px" }}>
        <St.Button
          onClick={() => onChange({ ...state, psyLevel: 1 })}
          active={state.psyLevel == 1 ? "true" : "false"}
        >
          Первая
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, psyLevel: 2 })}
          active={state.psyLevel == 2 ? "true" : "false"}
        >
          Вторая
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, psyLevel: 3 })}
          active={state.psyLevel == 3 ? "true" : "false"}
        >
          Третья
        </St.Button>
        <St.Button
          onClick={() => onChange({ ...state, psyLevel: 4 })}
          active={state.psyLevel == 4 ? "true" : "false"}
        >
          Четвертая
        </St.Button>
      </St.Bar>
    </St.Wrapper>
  );
}
