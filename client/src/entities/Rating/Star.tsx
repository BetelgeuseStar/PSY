import * as St from "./styled";
import { projectColors } from "../../shared/utils";

type StarProps = {
  isActive: boolean;
  onChangeHover: (hovered: boolean) => void;
  onClick: () => void;
  readonly: boolean;
};

export function Star({
  isActive,
  onChangeHover,
  onClick,
  readonly,
}: StarProps) {
  return (
    <St.StarWrapper
      $readonly={readonly}
      onMouseEnter={() => onChangeHover(true)}
      onMouseLeave={() => onChangeHover(false)}
      onClick={onClick}
    >
      {isActive ? (
        <St.ActiveStarIcon
          style={{
            fill: readonly
              ? projectColors.starReadonly
              : projectColors.starEditable,
          }}
        />
      ) : (
        <St.InactiveStarIcon />
      )}
    </St.StarWrapper>
  );
}
