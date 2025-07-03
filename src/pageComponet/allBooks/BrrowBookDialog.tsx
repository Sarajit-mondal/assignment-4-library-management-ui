// src/pageComponents/BorrowBookDialog.jsx
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

interface BrrowBookDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book?: {
    invoice?: string;
    paymentStatus?: string;
    paymentMethod?: string;
    // Add other book properties if needed
  };
}

export default function BrrowBookDialog({ open, onOpenChange, book }: BrrowBookDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
          <DialogDescription>
            You selected invoice: <strong>{book?.invoice}</strong>
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Status: {book?.paymentStatus}</p>
          <p>Method: {book?.paymentMethod}</p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
