import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import booksImg from "../../../public/img/books.jpg";
import { createSource, useSourcesList } from "../../shared/api";
import { useNavigate } from "react-router";
import { Loader } from "../../shared/ui";

export function SourcesListPage() {
  const navigate = useNavigate();

  const { data: sources, isFetching } = useSourcesList();

  async function addSourceHandler() {
    const newSource = await createSource();
    navigate(`/sources/${newSource.id}`);
  }

  return (
    <St.Wrapper>
      <Loader isLoading={isFetching} />
      <EntityAdder text="Добавить источник" onClick={addSourceHandler} />
      {sources?.map(({ id, title, photoUrl }) => {
        return (
          <EntityPicker
            id={id}
            title={title ?? `Без названия ${id}`}
            photoUrl={photoUrl}
            noPhoto={booksImg as string}
            key={id}
            url="sources"
          />
        );
      })}
    </St.Wrapper>
  );
}
