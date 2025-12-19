import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Person } from "../../../shared/api";
import { usePerson, useUpdateMutationPerson } from "../../../shared/api";
import { useDeleteMutationPerson } from "../../../shared/api/person/deletePerson.ts";

export function useLocalePerson() {
  const { personId } = useParams();
  const id = Number(personId);

  const [localePerson, setLocalePerson] = useState<Person>();

  const {
    data: fetchedPerson,
    isLoading: personIsLoading,
    dataUpdatedAt: personDataUpdatedAt,
  } = usePerson(id);

  const { debouncedMutate: debouncedUpdatePerson } =
    useUpdateMutationPerson(id);
  const { mutateAsync: deletePerson } = useDeleteMutationPerson(id);

  useEffect(() => {
    if (localePerson) return;
    setLocalePerson(fetchedPerson);
  }, [personDataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdatePerson.flush();
    };
  }, []);

  function setPersonParamClosure<P extends keyof Person>(
    param: P,
  ): (value: Person[P]) => void {
    return (value) => {
      setLocalePerson((prev) => {
        const newPersonData = {
          ...prev!,
          [param]: value,
        };

        debouncedUpdatePerson(newPersonData);

        return newPersonData;
      });
    };
  }

  return {
    personId: id,
    personIsLoading,
    person: localePerson,
    setPersonParamClosure,
    deletePerson: deletePerson,
  };
}
