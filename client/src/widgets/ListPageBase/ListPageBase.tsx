import * as St from "./styled.ts";
import { Loader } from "../../shared/ui";
import { EntityAdder, EntityPicker } from "../EntityPicker";

type Props = {
  isLoading: boolean;
  adderText: string;
  onAdderClick: () => void;
  items: ListPageItem[];
};

export type ListPageItem = {
  id: number;
  title: string;
  photoUrl: string | null;
  author: string;
  noPhotoUrl: string;
  isPublic: boolean;
  url: string;
  type?: number[];
};

export function ListPageBase({
  isLoading,
  adderText,
  onAdderClick,
  items,
}: Props) {
  return (
    <St.Wrapper>
      <Loader isLoading={isLoading} />
      <EntityAdder text={adderText} onClick={onAdderClick} />
      {items?.map(
        ({ id, title, photoUrl, isPublic, author, noPhotoUrl, url, type }) => {
          return (
            <EntityPicker
              id={id}
              title={title}
              photoUrl={photoUrl}
              author={author}
              noPhoto={noPhotoUrl}
              key={id}
              url={url}
              isPublic={isPublic}
              psyType={type}
            />
          );
        },
      )}
    </St.Wrapper>
  );
}
