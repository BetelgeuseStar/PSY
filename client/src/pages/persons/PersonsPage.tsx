import * as Styled from "./styled.ts";
import { PersonAdder, PersonPicker } from "../../entities/PersonPicker";
import type { PersonPickerInfo } from "../../shared/types";

export function PersonsPage() {
  const persons: PersonPickerInfo[] = [
    {
      id: 1,
      name: "Илюша Мэддисон",
      type: "ВФЛЭ",
      photoUrl: undefined,
    },
  ];

  return (
    <Styled.Wrapper>
      {persons.map((person) => {
        return <PersonPicker {...person} key={person.id} />;
      })}
      <PersonAdder />
    </Styled.Wrapper>
  );
}
