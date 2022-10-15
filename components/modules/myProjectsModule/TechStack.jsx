export default function TechStack({ techStack }) {
  return (
    <ul>
      {techStack?.map((tech) => (
        <li key={tech._id}>{tech.title}</li>
      ))}
    </ul>
  );
}
