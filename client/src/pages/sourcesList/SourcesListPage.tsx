import * as St from "./styled.ts";
import { EntityAdder, EntityPicker } from "../../widgets/EntityPicker";
import type { SourceInfo } from "../../shared/types";
import booksImg from "../../../public/img/books.jpg";

export function SourcesListPage() {
  const sources: SourceInfo[] = [
    {
      id: 1,
      title: "Синтаксис Любви",
      author: "Афанасьев",
      photoUrl: undefined,
    },
  ];

  return (
    <St.Wrapper>
      <EntityAdder text="Добавить источник" />
      {sources.map(({ id, title, photoUrl }) => {
        return (
          <EntityPicker
            id={id}
            title={title}
            photoUrl={photoUrl ?? booksImg}
            key={id}
            url="sources"
          />
        );
      })}
    </St.Wrapper>
  );
}
