import * as St from "./styled";
import { InvisibleIcon } from "../../shared/icons";

type Props = {
  isVisible: boolean;
};

export function VisibilityStatusLayer({ isVisible }: Props) {
  return <St.Wrapper21>{!isVisible && <InvisibleIcon />}</St.Wrapper21>;
}
