import Image from "next/image";

export default function SanityImage({
  image,
  layout = "fill",
  sizes,
  objectFit = "cover",
}) {
  return (
    <Image src={image?.asset?.url} layout={layout} objectFit={objectFit} />
  );
}
