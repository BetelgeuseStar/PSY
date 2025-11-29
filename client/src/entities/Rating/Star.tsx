import * as St from "./styled";

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
      {isActive ? <St.ActiveStarIcon /> : <St.InactiveStarIcon />}
    </St.StarWrapper>
  );
}
