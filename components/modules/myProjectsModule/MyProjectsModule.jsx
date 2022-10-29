import { PortableText } from "@portabletext/react";
import SanityImage from "../../SanityImage";
import Links from "./Links";
import TechStack from "./TechStack";

export default function MyProjectsModule({ projects }) {
  return (
    <section>
      <div>
        <h1 className="heading">Projects</h1>
        <div className="bg-gradient-to-r from-sky-400 to-sky-300 h-px my-2" />
      </div>
      <div className="flex flex-col gap-16">
        {projects?.map((project) => (
          <div key={project?._id} className="flex flex-col gap-6">
            <div>
              <h2 className="heading-sm uppercase">{project?.title}</h2>
              <span className="label text-yellow-300">{project?.summary}</span>
            </div>
            <div className="flex flex-col gap-2 max-w-xl bg-slate-dark bg-opacity-50 p-3 rounded">
              <PortableText value={project?.body} />
            </div>
            <div>
              <TechStack techStack={project?.techStack} />
              <Links links={project?.links} />
            </div>
            <div className="relative aspect-[4/3] max-w-xl">
              <SanityImage image={project?.mainImage} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
