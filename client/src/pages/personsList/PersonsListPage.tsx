import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import noPhoto from "../../../public/img/noPhoto.jpg";
import type { Person } from "../../shared/api";
import { createPerson, getPersonsList } from "../../shared/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function PersonsListPage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const navigate = useNavigate();

  async function fetchPersons() {
    setPersons(await getPersonsList());
  }

  useEffect(() => {
    fetchPersons();
  }, []);

  // const persons: PersonInfo[] = [
  //   {
  //     id: 1,
  //     name: "Илюша Мэддисон",
  //     type: "ВФЛЭ",
  //     photoUrl: undefined,
  //   },
  // ];

  async function addPersonHandler() {
    const newPerson = await createPerson();
    navigate(`/persons/${newPerson.id}`);
  }

  return (
    <St.Wrapper>
      <EntityAdder text="Добавить персону" onClick={addPersonHandler} />
      {persons.map(({ id, name, type, photoUrl }) => {
        return (
          <EntityPicker
            id={id}
            title={name ?? `Без имени ${id}`}
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
