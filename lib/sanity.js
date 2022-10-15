import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6oaau44j",
  dataset: "production",
  apiVersion: "2022-10-09",
  useCdn: false,
});

export function getProjects() {
  return client.fetch(`*[_type == "project"]{
    _id, title, summary, body,
    "links": {
        "github": github_link,
        "live": live_link
    },
    "techStack": tech_stack[]->{_id, title},
    mainImage{
      asset->{
        _id, url
      }
    }
  }`);
}
