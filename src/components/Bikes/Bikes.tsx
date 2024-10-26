import useBikes from "@/hooks/useBikes";
import Bike from "./Bike";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import BikePagination from "./BikePagination";
import BikeTitleSearch from "./BikeTitleSearch";
import NoData from "./NoData";
function Bikes() {
  const {
    bikes,
    error,
    isError,
    isSuccess,
    page,
    setPage,
    isFetching,
    pagesArray,
    isLoading,
    searchParams,
    setSearchParams,
    setTitle,
    title,
  } = useBikes();

  const loading = (
    <Loader2 className="animate-spin mx-auto my-5 h-16 w-16 text-blue-400" />
  );
  const data = bikes?.data?.bikes;
  if (!data) {
    return <NoData title="No bikes matching your search" />;
  }
  let content: ReactNode;
  if (isError) content = error as string;
  if (isSuccess && Array.isArray(data)) {
    content = (
      <div className="flex lg:px-10 flex-col gap-2">
        {data.map((bike, idx) => (
          <div key={bike.id} className={idx % 2 === 0 ? "bg-gray-100" : ""}>
            <Bike {...bike} />
          </div>
        ))}
      </div>
    );
  }
  // console.log(data);
  return (
    <section className="flex flex-col md:gap-3 lg:gap-5">
      <BikeTitleSearch {...{ title, setTitle }} />
      {isLoading && loading}
      {data && content}
      {isFetching && loading}
      {!isFetching && data && data?.length > 1 && (
        <BikePagination
          {...{ searchParams, setSearchParams, pagesArray, setPage, page }}
        />
      )}
    </section>
  );
}
export default Bikes;
