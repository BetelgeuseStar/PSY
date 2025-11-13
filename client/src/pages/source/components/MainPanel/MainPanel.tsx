import * as St from "./styled.ts";
import booksImg from "../../../../../public/img/books.jpg";
import {
  BackIcon,
  SettingsIcon,
  VisibleIcon,
} from "../../../../shared/ui/icons";
import { FunctionPicker } from "../../../../widgets/FunctionPicker";
import { useState } from "react";
import type { FunctionPickerState } from "../../../../shared/types";
import { PsyFunction } from "../../../../shared/types";
import { IconButton, Text } from "../../../../shared/ui";
import { useNavigate } from "react-router";

export function MainPanel() {
  const [pickerState, setPickerState] = useState<FunctionPickerState>({
    type: PsyFunction.Will,
    number: 1,
  });

  const navigate = useNavigate();

  const photoUrl = undefined;
  const title = "Синтаксис Любви";
  const author = "Афанасьев";

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton
            onClick={() => navigate("/sources")}
            icon={<BackIcon />}
          ></IconButton>
          <IconButton icon={<SettingsIcon />}></IconButton>
        </St.ExtraButtonsWrapper>
        <IconButton icon={<VisibleIcon />}></IconButton>
      </St.ExtraPanelWrapper>
      <St.Photo src={photoUrl ?? booksImg} />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <Text style={{ fontSize: 20, lineHeight: "20px" }}>{title}</Text>
          <Text style={{ fontSize: 20, lineHeight: "20px" }}>{author}</Text>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={setPickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
