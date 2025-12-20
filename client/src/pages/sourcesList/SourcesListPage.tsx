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

  const sortedSources = sources?.sort((a, b) => b.id - a.id);

  return (
    <St.Wrapper>
      <Loader isLoading={isFetching} />
      <EntityAdder text="Добавить источник" onClick={addSourceHandler} />
      {sortedSources?.map(({ id, title, photoUrl, isPublic, author }) => {
        return (
          <EntityPicker
            id={id}
            title={title ?? `Без названия ${id}`}
            photoUrl={photoUrl}
            author={author}
            noPhoto={booksImg as string}
            key={id}
            url="sources"
            isPublic={isPublic}
          />
        );
      })}
    </St.Wrapper>
  );
}
