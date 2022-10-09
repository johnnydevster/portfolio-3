import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6oaau44j",
  dataset: "production",
  apiVersion: "2022-10-09",
  useCdn: false,
});
