import { useState } from "react";
import { Button } from "@/components/ui/button"; // adjust the path if needed

interface BorrowBookDialogProps {
  book?: { invoice?: number };
  onUpdate?: (quantity: number) => void;
}

export default function BorrowBookDialog({ book, onUpdate }: BorrowBookDialogProps) {
  // show 0 if no book prop yet
  const [quantity, setQuantity] = useState(book?.invoice ?? 0);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onUpdate?.(quantity);      // callback to parent
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      <label htmlFor="invoice" className="block font-medium">
        How many&nbsp;books do you want to borrow?
      </label>

      <input
        id="invoice"
        type="number"
        min={1}
        className="w-full border rounded p-2"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <Button type="submit" disabled={quantity < 1}>
        Update
      </Button>
    </form>
  );
}
