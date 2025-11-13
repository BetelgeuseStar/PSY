import * as St from "./styled";

type StarProps = {
  isActive: boolean;
  onChangeHover: (hovered: boolean) => void;
  onClick: () => void;
};

export function Star({ isActive, onChangeHover, onClick }: StarProps) {
  return (
    <St.StarWrapper
      onMouseEnter={() => onChangeHover(true)}
      onMouseLeave={() => onChangeHover(false)}
      onClick={onClick}
    >
      {isActive ? <St.ActiveStarIcon /> : <St.InactiveStarIcon />}
    </St.StarWrapper>
  );
}
