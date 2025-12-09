import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import { createPerson, usePersonsList } from "../../shared/api";
import { useNavigate } from "react-router";
import noPhoto from "../../../public/img/noPhoto.jpg";
import { Loader } from "../../shared/ui";

export function PersonsListPage() {
  const navigate = useNavigate();

  const { data: persons, isFetching } = usePersonsList();

  async function addPersonHandler() {
    const newPerson = await createPerson();
    navigate(`/persons/${newPerson.id}`);
  }

  return (
    <St.Wrapper>
      <Loader isLoading={isFetching} />
      <EntityAdder text="Добавить персону" onClick={addPersonHandler} />
      {persons?.map(({ id, name, photoUrl }) => {
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
