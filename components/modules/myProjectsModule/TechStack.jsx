import { motion } from "framer-motion";

export default function TechStack({ techStack }) {
  return (
    <ul className="uppercase font-semibold tracking-wider text-sky-900 text-xs flex gap-2">
      {techStack?.map((tech) => (
        <li
          className="bg-sky-300 bg-opacity-90 inline-block p-1 px-2 rounded relative"
          key={tech._id}
        >
          <motion.div className="absolute inset-0 bg-sky-300 rounded" />
          <span className="relative">{tech.title}</span>
        </li>
      ))}
    </ul>
  );
}
