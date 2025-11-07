import * as Styled from "./styled.ts";
import type { TypesNavPanelState } from "../../shared/types/TypeNavPanel.ts";
import { PsyFunction } from "../../shared/types/TypeNavPanel.ts";

export type TypesNavPanelProps = {
  state: TypesNavPanelState;
  onChange: (state: TypesNavPanelState) => void;
};

export function TypesNavPanel({ state, onChange }: TypesNavPanelProps) {
  return (
    <Styled.Wrapper>
      <Styled.Bar>
        <Styled.WillButton
          onClick={() => onChange({ ...state, type: PsyFunction.Will })}
          active={state.type == PsyFunction.Will ? "true" : "false"}
        >
          Воля
        </Styled.WillButton>
        <Styled.PhysicsButton
          onClick={() => onChange({ ...state, type: PsyFunction.Physics })}
          active={state.type == PsyFunction.Physics ? "true" : "false"}
        >
          Физика
        </Styled.PhysicsButton>
        <Styled.EmotionButton
          onClick={() => onChange({ ...state, type: PsyFunction.Emotion })}
          active={state.type == PsyFunction.Emotion ? "true" : "false"}
        >
          Эмоция
        </Styled.EmotionButton>
        <Styled.LogicsButton
          onClick={() => onChange({ ...state, type: PsyFunction.Logics })}
          active={state.type == PsyFunction.Logics ? "true" : "false"}
        >
          Логика
        </Styled.LogicsButton>
      </Styled.Bar>
      <Styled.Bar style={{ marginLeft: "30px" }}>
        <Styled.Button
          onClick={() => onChange({ ...state, number: 1 })}
          active={state.number == 1 ? "true" : "false"}
        >
          Первая
        </Styled.Button>
        <Styled.Button
          onClick={() => onChange({ ...state, number: 2 })}
          active={state.number == 2 ? "true" : "false"}
        >
          Вторая
        </Styled.Button>
        <Styled.Button
          onClick={() => onChange({ ...state, number: 3 })}
          active={state.number == 3 ? "true" : "false"}
        >
          Третья
        </Styled.Button>
        <Styled.Button
          onClick={() => onChange({ ...state, number: 4 })}
          active={state.number == 4 ? "true" : "false"}
        >
          Четвертая
        </Styled.Button>
      </Styled.Bar>
    </Styled.Wrapper>
  );
}
