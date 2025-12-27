import booksImg from "../../../public/img/books.jpg";
import { createSource, useSourcesList } from "../../shared/api";
import { useNavigate } from "react-router";
import type { ListPageItem } from "../../widgets/ListPageBase";
import { ListPageBase } from "../../widgets/ListPageBase";

export function SourcesListPage() {
  const navigate = useNavigate();

  const { data: sources, isFetching } = useSourcesList();

  async function addSourceHandler() {
    const newSource = await createSource();
    navigate(`/sources/${newSource.id}`);
  }

  const sortedSources = sources?.sort((a, b) => b.id - a.id);

  const listPageItems: ListPageItem[] = sortedSources?.map((source) => {
    return {
      id: source.id,
      title: source.title ?? `Без названия ${source.id}`,
      photoUrl: source.photoUrl,
      author: source.author,
      noPhotoUrl: booksImg as string,
      isPublic: source.isPublic,
      url: "sources",
    };
  });

  return (
    <ListPageBase
      isLoading={isFetching}
      adderText="Добавить источник"
      onAdderClick={addSourceHandler}
      items={listPageItems}
    />
  );
}
