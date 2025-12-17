import { useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Person } from "../../../shared/api";
import {
  usePerson,
  usePickedMarkers,
  useUpdateMutationPerson,
  useUpdateMutationPickedMarkers,
} from "../../../shared/api";
import { useDeleteMutationPerson } from "../../../shared/api/person/deletePerson.ts";

export function usePersonData() {
  const { personId } = useParams();
  const id = Number(personId);

  const [localePerson, setLocalePerson] = useState<Person>();
  const [localePickedMarkerIds, setLocalePickedMarkerIds] =
    useState<number[]>();

  const {
    data: fetchedPerson,
    isLoading: personIsLoading,
    dataUpdatedAt: personDataUpdatedAt,
  } = usePerson(id);

  const {
    pickedIds: fetchedPickedIds,
    isLoading: pickedMarkersIsLoading,
    dataUpdatedAt: pickedMarkersDataUpdatedAt,
  } = usePickedMarkers(id, localePerson?.sourceId ?? null);

  const { debouncedMutate: debouncedUpdatePickedMarkers } =
    useUpdateMutationPickedMarkers(id, localePerson?.sourceId ?? null);

  function updatePickedMarkersHandler(updatedPickedIds: number[]) {
    debouncedUpdatePickedMarkers(updatedPickedIds);

    setLocalePickedMarkerIds(updatedPickedIds);
  }

  const { debouncedMutate: debouncedUpdatePerson } =
    useUpdateMutationPerson(id);
  const { mutateAsync: deletePerson } = useDeleteMutationPerson(id);

  useEffect(() => {
    if (localePerson) return;
    setLocalePerson(fetchedPerson);
  }, [personDataUpdatedAt]);

  useEffect(() => {
    if (localePickedMarkerIds?.length) return;
    setLocalePickedMarkerIds(fetchedPickedIds);
  }, [pickedMarkersDataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdatePerson.flush();
      debouncedUpdatePickedMarkers.flush();
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

  const isLoading = personIsLoading || pickedMarkersIsLoading;

  return {
    isLoading,
    person: localePerson,
    pickedMarkerIds: localePickedMarkerIds,
    setPersonParamClosure,
    deletePerson: deletePerson,
    updatePickedMarkerIds: updatePickedMarkersHandler,
  };
}
