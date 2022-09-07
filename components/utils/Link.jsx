import { motion } from "framer-motion";
import Link from "next/link";

export default function NextLink({ href, children }) {
  const []
  return (
    <Link href={href}>
      <motion.a>{children}</motion.a>
    </Link>
  );
}
