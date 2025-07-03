import { useState, type SetStateAction } from "react";
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


type Book = {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
};

const invoices: Book[] = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
];

export default function AllBooks() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dilogName, setDialogName] = useState<string | undefined>();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const openDialog = (book: Book,dialog:string) => {
    setSelectedBook(book);
    setDialogName(dialog)
    setDialogOpen(true);
  };

  return (
    <>
      {/* Dialog Component */}
      <DialogTemplate
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        book={selectedBook ?? undefined}
        dialogName={dilogName ?? ""}
      />
      
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
          {invoices.map((book,inx) => (
            <TableRow key={inx}>
              <TableCell>{inx+1}.</TableCell>
              <TableCell>{"Title"}</TableCell>
              <TableCell>{"Author"}</TableCell>
              <TableCell>{"ISBN"}</TableCell>
              <TableCell>{"Copies"}</TableCell>
              <TableCell className="text-right">{"Availability"}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => openDialog(book,"EditBook")}>
                      Edit Book
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => openDialog(book,"BorrowBook")}>
                      Borrow / View
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => alert("Delete Book")}>
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
