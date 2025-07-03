import { useForm } from "react-hook-form";
import { useEffect } from "react";

type Book = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

export default function AddBook({ book }: { book?: Book }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 0,
      available: false,
    },
  });

  // whenever `book` changes, push it into RHF
  useEffect(() => {
    if (book) reset(book);
  }, [book, reset]);

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white shadow rounded-xl"
    >
      <input
        {...register("title", { required: true })}
        className="w-full border rounded p-2"
        placeholder="Title"
      />
      {errors.title && <p className="text-sm text-red-500">Required</p>}

      {/* repeat for author, genre, isbn, description, copies */}
      <input
  {...register("author", { required: true })}
  className="w-full border rounded p-2"
  placeholder="Author"
/>
{errors.author && <p className="text-sm text-red-500">Required</p>}

<input
  {...register("genre", { required: true })}
  className="w-full border rounded p-2"
  placeholder="Genre"
/>
{errors.genre && <p className="text-sm text-red-500">Required</p>}

<input
  {...register("isbn", { required: true })}
  className="w-full border rounded p-2"
  placeholder="ISBN"
/>
{errors.isbn && <p className="text-sm text-red-500">Required</p>}

<textarea
  {...register("description", { required: true })}
  className="w-full border rounded p-2 h-28 resize-none"
  placeholder="Description"
/>
{errors.description && <p className="text-sm text-red-500">Required</p>}

<input
  type="number"
  min="0"
  {...register("copies", {
    required: true,
    valueAsNumber: true,
  })}
  className="w-full border rounded p-2"
  placeholder="Copies"
/>
{errors.copies && <p className="text-sm text-red-500">Must be a number</p>}


      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("available")}
          className="h-4 w-4 accent-indigo-600"
        />
        Available
      </label>

      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Save
      </button>
    </form>
  );
}
