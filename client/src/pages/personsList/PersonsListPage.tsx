import type { Person } from "../../shared/api";
import { useCreateMutationPerson, usePersonsList } from "../../shared/api";
import { useNavigate } from "react-router";
import noPhoto from "../../../public/img/noPhoto.jpg";
import type { ListPageItem } from "../../widgets/ListPageBase";
import { ListPageBase } from "../../widgets/ListPageBase";

export function PersonsListPage() {
  const navigate = useNavigate();

  const { data: persons, isFetching } = usePersonsList();
  const { mutateAsync: createPerson } = useCreateMutationPerson();

  async function addPersonHandler() {
    const newPerson = await createPerson(undefined);
    navigate(`/persons/${newPerson.id}`);
  }

  const sortedPersons: Person[] = persons?.sort((a, b) => b.id - a.id);

  const listPageItems: ListPageItem[] = sortedPersons?.map((person) => {
    return {
      id: person.id,
      title: person.name ?? `Без имени ${person.id}`,
      photoUrl: person.photoUrl,
      author: person.author,
      noPhotoUrl: noPhoto as string,
      isPublic: person.isPublic,
      url: "persons",
      type: person.type,
    };
  });

  return (
    <ListPageBase
      isLoading={isFetching}
      adderText="Добавить персону"
      onAdderClick={addPersonHandler}
      items={listPageItems}
    />
  );
}
