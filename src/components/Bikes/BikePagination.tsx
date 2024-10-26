import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { IBikePagination } from "@/interfaces";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BikePagination({
  pagesArray,
  setPage,
  page,
  searchParams,
  setSearchParams,
}: IBikePagination) {
  const navigate = useNavigate();
  const numberOfPages: number = page;
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setSearchParams({ page: newPage.toString() });
    navigate(`?page=${newPage}`, { replace: true });
  };

  useEffect(() => {
    if (page > 1) {
      const params = new URLSearchParams(searchParams);
      setPage(Number(params.get("page")));
    }
  }, [searchParams, setPage]);

  // Calculate the pages to show around the current page
  // Start at two pages before, or 1 if out of range
  const startPage = Math.max(numberOfPages - 2, 1);
  // End at two pages after, or the last page
  const endPage = Math.min(numberOfPages + 2, pagesArray.length);

  const visiblePages = pagesArray.slice(startPage - 1, endPage);
  // console.log(page);
  return (
    <Pagination className="cursor-pointer">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
          />
        </PaginationItem>
        {startPage > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            {startPage > 2 && <PaginationEllipsis />}
          </>
        )}
        {visiblePages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < pagesArray.length && (
          <>
            {endPage < pagesArray.length - 1 && <PaginationEllipsis />}
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(pagesArray.length)}
              >
                {pagesArray.length}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationNext
            onClick={() =>
              handlePageChange(Math.max(page + 1, pagesArray.length))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
