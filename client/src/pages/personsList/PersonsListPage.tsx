import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import type { Person } from "../../shared/api";
import { createPerson, getPersonsList } from "../../shared/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import noPhoto from "../../../public/img/noPhoto.jpg";

export function PersonsListPage() {
  const [persons, setPersons] = useState<Person[]>([]);
  const navigate = useNavigate();

  async function fetchPersons() {
    setPersons(await getPersonsList());
  }

  useEffect(() => {
    fetchPersons();
  }, []);

  async function addPersonHandler() {
    const newPerson = await createPerson();
    navigate(`/persons/${newPerson.id}`);
  }

  return (
    <St.Wrapper>
      <EntityAdder text="Добавить персону" onClick={addPersonHandler} />
      {persons.map(({ id, name, photoUrl }) => {
        return (
          <EntityPicker
            id={id}
            title={name ?? `Без имени ${id}`}
            photoUrl={photoUrl}
            noPhoto={noPhoto as string}
            key={id}
            url="persons"
          />
        );
      })}
    </St.Wrapper>
  );
}
