import { IBikeTitle } from "@/interfaces";

export default function Title({ title, value }: IBikeTitle) {
  return (
    <p className="text-md lg:text-lg">
      <span className="font-bold">{title}</span>
      <span>
        {value
          ? `${value.length > 50 ? `${value.slice(0, 50)}...` : value}`
          : "No description"}
      </span>
    </p>
  );
}
