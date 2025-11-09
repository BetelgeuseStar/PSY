import * as St from "./styled.ts";
import { PersonAdder, PersonPicker } from "../../entities/PersonPicker";
import type { PersonPickerInfo } from "../../shared/types";

export function PersonsListPage() {
  const persons: PersonPickerInfo[] = [
    {
      id: 1,
      name: "Илюша Мэддисон",
      type: "ВФЛЭ",
      photoUrl: undefined,
    },
  ];

  return (
    <St.Wrapper>
      {persons.map((person) => {
        return <PersonPicker {...person} key={person.id} />;
      })}
      <PersonAdder />
    </St.Wrapper>
  );
}
