import { getApi } from "../api.ts";
import type { Person } from "./types.ts";

export async function createPerson() {
  const response = await getApi().post<Person>("/createPerson");

  return response.data as Person;
}
