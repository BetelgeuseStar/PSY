import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import type { PersonInfo } from "../../shared/types";
import noPhoto from "../../../public/img/noPhoto.jpg";

export function PersonsListPage() {
  const persons: PersonInfo[] = [
    {
      id: 1,
      name: "Илюша Мэддисон",
      type: "ВФЛЭ",
      photoUrl: undefined,
    },
  ];

  return (
    <St.Wrapper>
      <EntityAdder text="Добавить персону" />
      {persons.map(({ id, name, type, photoUrl }) => {
        return (
          <EntityPicker
            id={id}
            title={name}
            extraInfo={type}
            photoUrl={photoUrl ?? noPhoto}
            key={id}
            url="persons"
          />
        );
      })}
    </St.Wrapper>
  );
}
