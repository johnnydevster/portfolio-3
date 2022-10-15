import { PortableText } from "@portabletext/react";
import Links from "./Links";
import TechStack from "./TechStack";

export default function MyProjectsModule({ projects }) {
  console.log(projects);
  return (
    <section>
      <div>
        <h1 className="heading">Projects</h1>
        <div className="bg-gradient-to-r from-sky-400 to-sky-300 h-px my-2" />
      </div>
      <div className="flex flex-col gap-16">
        {projects?.map((project) => (
          <div key={project._id}>
            <h2>{project.title}</h2>
            <span>{project.summary}</span>
            <TechStack techStack={project.techStack} />
            <Links links={project?.links} />
            <PortableText value={project.body} />
          </div>
        ))}
      </div>
    </section>
  );
}
