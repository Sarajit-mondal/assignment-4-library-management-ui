import { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust the path if needed
import type { Book } from "@/interface/Interface";
import { useBorrowBookMutation } from "@/api/LibraryApi";
import toast from "react-hot-toast";

interface BorrowBookDialogProps {
  book: Book;
  onClose: () => void;
}

export default function BorrowBookDialog({
  book,
  onClose,
}: BorrowBookDialogProps) {
  // show 0 if no book prop yet
  const [quantity, setQuantity] = useState(0);
  const [borroBook] = useBorrowBookMutation();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(quantity);
    const borrowBookData = {
      book: book._id,
      quantity: quantity,
    };
    try {
      await borroBook(borrowBookData).unwrap();
      toast.success("Borrow This Book Completed")
      onClose();
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
      
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm scroll-auto">
      <h1 className="text-lg font-bold">{book.title}</h1>
      <h1 className="font-bold -mt-4"> Available Book : {book.copies}</h1>
      <div>
        <label className="block text-sm font-medium mb-1">Due Date</label>
        <input
          type="date"
          defaultValue={today}
          min={today}
          className="w-full border rounded p-2"
        />
      </div>
      <label htmlFor="invoice" className="block font-medium">
        How many&nbsp;books do you want to borrow?
      </label>
      <input
        id="invoice"
        type="number"
        min={1}
        className="w-full border rounded p-2"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <Button type="submit" disabled={quantity < 1}>
        Update
      </Button>
    </form>
  );
}
