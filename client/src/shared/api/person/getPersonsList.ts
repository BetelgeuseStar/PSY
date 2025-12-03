import { getApi } from "../api.ts";
import type { Person } from "./types.ts";

export async function getPersonsList() {
  const response = await getApi().get<Person[]>("/persons");

  return response.data as Person[];
}
