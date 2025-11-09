import * as St from "./styled.ts";
import noPhoto from "../../../../../public/img/noPhoto.jpg";
import {
  BackIcon,
  SettingsIcon,
  VisibleIcon,
} from "../../../../shared/ui/icons";
import { FunctionPicker } from "../../../../widgets/FunctionPicker";
import { useState } from "react";
import type { FunctionPickerState } from "../../../../shared/types/TypeNavPanel.ts";
import { PsyFunction } from "../../../../shared/types/TypeNavPanel.ts";
import { Text } from "../../../../shared/ui";

export function MainPanel() {
  const [pickerState, setPickerState] = useState<FunctionPickerState>({
    type: PsyFunction.Will,
    number: 1,
  });
  const photoUrl = undefined;
  const name = "Илюша мэддисон";

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <St.ExtraButton icon={<BackIcon />}></St.ExtraButton>
          <St.ExtraButton icon={<SettingsIcon />}></St.ExtraButton>
        </St.ExtraButtonsWrapper>
        <St.ExtraButton icon={<VisibleIcon />}></St.ExtraButton>
      </St.ExtraPanelWrapper>
      <St.Photo src={photoUrl ?? noPhoto} />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <Text style={{ fontSize: 20, lineHeight: "20px" }}>{name}</Text>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={setPickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
