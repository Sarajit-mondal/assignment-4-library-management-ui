import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BorrowBookDialog from "./BrrowBookDialog";
import AddBook from "../AddBook";
import type { Book } from "@/interface/Interface";

export default function BorrowDialog({
  open,
  onOpenChange,
  book,
  dialogName,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book: Book
  dialogName: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* 1️⃣  max‑height and flex column */}
      <DialogContent className="flex max-h-[90vh] flex-col sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>

        {/* 2️⃣  scrollable body area */}
        <div className="flex-1 overflow-y-auto pr-1">
          {dialogName === "BorrowBook" ? (
            <BorrowBookDialog />
          ) : (
            <AddBook />
          )}
        </div>

        {/* 3️⃣  footer stays pinned */}
        <DialogFooter className="pt-4">
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
