import { getApi } from "../api.ts";
import type { Person } from "./types.ts";
import { debounce } from "../../utils";

export async function updatePerson(person: Person) {
  const response = await getApi().post<Person>("/updatePerson", { ...person });

  return response.data as Person;
}

export const debouncedFetchUpdatePerson = debounce(updatePerson, 1500);
