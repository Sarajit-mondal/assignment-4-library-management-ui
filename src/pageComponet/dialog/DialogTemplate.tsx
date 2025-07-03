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
import type { DialogTitleProps } from "@radix-ui/react-dialog";
import BrrowBookDialog from "./BrrowBookDialog";
import AddBook from "../AddBook";

interface DialogTemplateProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  book?: {
    invoice?: string;
    paymentStatus?: string;
    paymentMethod?: string;
    // Add other book properties if needed
  },
  dialogName: string

}

export default function DialogTemplate({ open, onOpenChange, book, dialogName }: DialogTemplateProps) {

  console.log(dialogName)
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Borrow Book</DialogTitle>
        </DialogHeader>

        <DialogDescription>
           {
            dialogName === "BorrowBook" ? <BrrowBookDialog/> : <AddBook />
           }
        </DialogDescription>
       
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
