import React, { useState } from "react";
import { useGetBooksQuery } from "@/api/LibraryApi";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MoreVertical } from "lucide-react";



interface PaginationBookProps {
  setPageLimit: (limit: number) => void;
  setPageSkip: (skip: number) => void;
  pageLimit : number
}

export default function PaginationBook({ setPageLimit, setPageSkip,pageLimit }: PaginationBookProps) {
  const [page, setPage] = useState(1);

  // 🛈 If your hook already infers the right type, remove `<BookResponse>`
  const {
    data,
    isLoading,
    isError,
  } = useGetBooksQuery({})

  const totalPages = data?.totalBooks ? Math.ceil(data?.totalBooks / pageLimit) : 0;

  // Use setPageLimit and setPageSkip when page changes
  React.useEffect(() => {
    setPageLimit(pageLimit); // assuming 10 items per page
    setPageSkip(page);
  }, [page, setPageLimit, setPageSkip]);
  const pagesToShow = (() => {
    if (totalPages <= 5) return [...Array(totalPages).keys()].map((n) => n + 1);

    // show first, last, and ±1 around current
    const set = new Set<number>([1, totalPages, page - 1, page, page + 1]);
    return [...set]
      .filter((p) => p >= 1 && p <= totalPages)
      .sort((a, b) => a - b);
  })();

  if (isLoading || isError || totalPages <= 1) return null;

  // setPageLimit(page)

  const handleSelect =(limit:number)=>{
    setPageLimit(limit)
    setPage(1)
  }

  return (
    <Pagination className="mt-6">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={page === 1}
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
          />
        </PaginationItem>

        {/* Page numbers */}
        {pagesToShow.map((p, i, arr) => (
          <React.Fragment key={p}>
            {/* Ellipsis between non‑consecutive numbers */}
            {i > 0 && p - arr[i - 1] > 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(p);
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}

        {/* limit per page */}
        <PaginationItem>
         <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Page Size: {pageLimit}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleSelect(5)}>5</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect(10)}>10</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSelect(20)}>20</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </PaginationItem>
        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={page === totalPages}
            onClick={(e) => {
              e.preventDefault();
              if (page < totalPages) setPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
