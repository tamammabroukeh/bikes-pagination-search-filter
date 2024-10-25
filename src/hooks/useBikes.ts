import { BikesSearchRequest } from "@/api/BikesApi";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

export default function useBikes() {
  const [page, setPage] = useState<number>(1);
  const [title, setTitle] = useState<string>("");
  const {
    isError,
    error,
    isLoading,
    data: bikes,
    isPreviousData,
    isFetching,
    isSuccess,
  } = useQuery(
    ["/search", page, title],
    () => BikesSearchRequest(page, title),
    {
      keepPreviousData: true,
    }
  );
  const [searchParams, setSearchParams] = useSearchParams();

  let pagesArray: number[];
  pagesArray = Array(page)
    .fill(page)
    .map((_, index) => index + 1);
  return {
    isError,
    error,
    isLoading,
    isSuccess,
    bikes,
    setPage,
    page,
    isPreviousData,
    isFetching,
    pagesArray,
    searchParams,
    setSearchParams,
    title,
    setTitle,
  };
}
