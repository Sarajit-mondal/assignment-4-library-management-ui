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
import BrrowBookDialog from "./BrrowBookDialog";


const invoices = [
  { invoice: "INV001", paymentStatus: "Paid", totalAmount: "$250.00", paymentMethod: "Credit Card" },
  { invoice: "INV002", paymentStatus: "Pending", totalAmount: "$150.00", paymentMethod: "PayPal" },
  { invoice: "INV003", paymentStatus: "Unpaid", totalAmount: "$350.00", paymentMethod: "Bank Transfer" },
];

export default function AllBooks() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openDialog = (book) => {
    setSelectedBook(book);
    setDialogOpen(true);
  };

  return (
    <>
      {/* Dialog Component */}
      <BrrowBookDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        book={selectedBook}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((book) => (
            <TableRow key={book.invoice}>
              <TableCell>{book.invoice}</TableCell>
              <TableCell>{book.paymentStatus}</TableCell>
              <TableCell>{book.paymentMethod}</TableCell>
              <TableCell className="text-right">{book.totalAmount}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onSelect={() => alert("Edit Book")}>
                      Edit Book
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => openDialog(book)}>
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
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$750.00</TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
