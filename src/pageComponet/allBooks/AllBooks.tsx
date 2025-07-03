import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { PaginationBook } from "./PaginationBook";
import DialogTemplate from "../dialog/DialogTemplate";
import { useGetBooksQuery } from "@/api/LibraryApi";
import type { Book } from "@/interface/Interface";




export default function AllBooks() {
  const {data:books,isLoading} = useGetBooksQuery({})
  console.log(books)
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dilogName, setDialogName] = useState<string | undefined>();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openDialog = (book: Book,dialog:string) => {
    setSelectedBook(book);
    setDialogName(dialog)
    setDialogOpen(true);
  };

  if(isLoading) return <div className="flex justify-center">Lodding.......</div>

  return (
    <>
      {/* Dialog Component */}
      {selectedBook && (
        <DialogTemplate
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          book={selectedBook}
          dialogName={dilogName ?? ""}
        />
      )}
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead className="text-right">Availability</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.data?.map((book:Book,inx:number) => (
            <TableRow key={inx}>
              <TableCell>{inx+1}.</TableCell>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.isbn}</TableCell>
              <TableCell>{book.copies}</TableCell>
              <TableCell className={`text-right ${book?.available ? "text-blue-500":"text-red-500"}`}>{book?.available ? "Available":"Unavailable"}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                      <MoreVertical className="w-4 h-4 " />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="cursor-pointer" onSelect={() => openDialog(book,"EditBook")}>
                      Edit Book
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onSelect={() => openDialog(book,"BorrowBook")}>
                      Borrow Book
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer text-red-500" onSelect={() => alert("Delete Book")}>
                      Delete Book
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
   <TableFooter>
  <TableRow>
    <TableCell colSpan={7} className="text-right py-4">
      <PaginationBook />
    </TableCell>
  </TableRow>
</TableFooter>

      </Table>
    </>
  );
}
