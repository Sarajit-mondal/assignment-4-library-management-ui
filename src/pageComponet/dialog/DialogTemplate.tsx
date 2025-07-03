import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import BorrowBookDialog from "./BrrowBookDialog";
import AddBook from "../AddBook";
import type { Book } from "@/interface/Interface";
import { useState } from "react";

interface DialogBookProps {
 open: boolean;
  onOpenChange: (open: boolean) => void;
  book: Book
  dialogName: string;
}
export default function DialogTemplate({
  open,
  onOpenChange,
  book,
  dialogName,
}: DialogBookProps) {
const onClose = () => {
  onOpenChange(false);
}
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* 1️⃣  max‑height and flex column */}
      <DialogContent className="flex max-h-[90vh] flex-col sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>
       <DialogDescription>
 {/* 2️⃣  scrollable body area */}
        <div className="flex-1 overflow-y-auto pr-1">
          {dialogName === "BorrowBook" ? (
            <BorrowBookDialog book={book} onClose={onClose} />
          ) : (
            <AddBook />
          )}
        </div>
       </DialogDescription>
       

          {/* footer stays pinned
        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
