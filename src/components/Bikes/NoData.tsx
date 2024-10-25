import { INoData } from "@/interfaces";

export default function NoData({ title, classes }: INoData) {
  return (
    title && (
      <p className={`text-lg font-semibold text-red-500 mx-auto ${classes}`}>
        {title}
      </p>
    )
  );
}
