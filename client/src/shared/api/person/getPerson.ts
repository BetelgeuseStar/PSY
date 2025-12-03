import type { Person } from "./types.ts";
import { getApi } from "../api.ts";

export async function getPerson(id: number) {
  const response = await getApi().get<Person>(`/person/${id}`);

  return response.data as Person;
}
