import { ChangeEvent, useMemo } from "react";
import { Input } from "../ui/input";
import debounce from "lodash.debounce";
import { IBikeSearch } from "@/interfaces";

export default function BikeTitleSearch({ title, setTitle }: IBikeSearch) {
  const debouncedSearchTerm = useMemo(() => debounce(setTitle, 200), []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSearchTerm(e.target.value);
  };

  return (
    <div>
      <Input
        className="border-2 py-3 mx-10 max-w-60 mb-3"
        value={title}
        onChange={handleSearchChange}
      />
    </div>
  );
}
