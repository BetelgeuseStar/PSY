import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import booksImg from "../../../public/img/books.jpg";
import { useEffect, useState } from "react";
import type { Source } from "../../shared/api";
import { createSource, getSourcesList } from "../../shared/api";
import { useNavigate } from "react-router";

export function SourcesListPage() {
  const [sources, setSources] = useState<Source[]>([]);
  const navigate = useNavigate();

  async function fetchSources() {
    setSources(await getSourcesList());
  }

  useEffect(() => {
    fetchSources();
  }, []);

  async function addSourceHandler() {
    const newSource = await createSource();
    navigate(`/sources/${newSource.id}`);
  }

  return (
    <St.Wrapper>
      <EntityAdder text="Добавить источник" onClick={addSourceHandler} />
      {sources.map(({ id, title, photoUrl }) => {
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
