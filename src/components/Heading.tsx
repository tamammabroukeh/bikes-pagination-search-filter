import { THeading } from "@/types";

export default function Heading({ title }: THeading) {
  return title && <p className="text-4xl text-blue-400 capitalize">{title}</p>;
}
