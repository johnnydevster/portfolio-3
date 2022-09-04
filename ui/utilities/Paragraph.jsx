export default function Paragraph({ className = "", children }) {
  return <p className={`${className} text-lg`}>{children}</p>;
}
