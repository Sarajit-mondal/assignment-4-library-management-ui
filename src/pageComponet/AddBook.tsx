import { useForm } from "react-hook-form";
import { useEffect } from "react";
import type { Book } from "@/interface/Interface";
import { useAddBookMutation, useUpdateBookMutation } from "@/api/LibraryApi";
import toast from "react-hot-toast";

type BookFormData = {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available: boolean;
};

interface AddBookProps {
  initialData?: Book; // when editing, pass the existing book
  onClose: () => void; // close dialog / drawer
}

export default function AddBook({ initialData, onClose }: AddBookProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>({
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
  const [addBook, { isLoading: isAdding }] =
    useAddBookMutation();
  const [updateBook, { isLoading: isUpdating }] =
    useUpdateBookMutation();

  // Push data into the form when `initialData` changes (edit mode)
  useEffect(() => {
    if (initialData) {
      const { title, author, genre, isbn, description, copies, available } =
        initialData;
      reset({ title, author, genre, isbn, description, copies, available });
    }
  }, [initialData, reset]);

  /** Handle add or update */
  const saveBook = async (data: BookFormData) => {
    if (initialData) {
      const book = {
        _id: initialData._id,
        ...data,
      };
      try {
        updateBook(book) 
        await updateBook(book).unwrap()
        toast.success('Updated Successfully')
        
        onClose();
         reset(); 
      } catch (error) {
        toast.error((error as Error)?.message || "Something went wrong")
        console.log(error)
      }
     

    } else {
      // createBookMutation.mutate(data);
      try {
        addBook(data);
        await addBook(data).unwrap()
        toast.success('addBook Successfully')
        reset(); 
      } catch (error) {
        if (
          error &&
          typeof error === "object" &&
          "data" in error &&
          error.data &&
          typeof (error as { data?: { message?: string } }).data?.message === "string"
        ) {
          toast.error((error as { data: { message: string } }).data.message);
        } else if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Unknown error");
        }
        console.log(error)
      }
    }

   
  };


  if (isAdding && isUpdating)
    return <div>{initialData ? "Updateting........" : "Saveing........"}</div>;
  return (
    <form
      onSubmit={handleSubmit(saveBook)}
      className="space-y-4 max-w-lg mx-auto p-6 bg-white shadow rounded-xl"
    >
      <input
        {...register("title", { required: true })}
        className="w-full border rounded p-2"
        placeholder="Title"
      />
      {errors.title && <p className="text-sm text-red-500">Required</p>}

      <input
        {...register("author", { required: true })}
        className="w-full border rounded p-2"
        placeholder="Author"
      />
      {errors.author && <p className="text-sm text-red-500">Required</p>}

      {/* Genre */}
      <select
        {...register("genre", { required: true })}
        className="w-full border rounded p-2 bg-white"
        defaultValue="" /* keeps placeholder effect */
      >
        <option value="" disabled hidden>
          Select genre
        </option>
        <option value="FICTION">Fiction</option>
        <option value="NON_FICTION">Non‑fiction</option>
        <option value="SCIENCE">Science</option>
        <option value="HISTORY">History</option>
        <option value="BIOGRAPHY">Biography</option>
        <option value="FANTASY">Fantasy</option>
      </select>

      {errors.genre && (
        <p className="text-sm text-red-500">Genre is required</p>
      )}

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
        min={0}
        {...register("copies", { required: true, valueAsNumber: true })}
        className="w-full border rounded p-2"
        placeholder="Copies"
      />
      {errors.copies && (
        <p className="text-sm text-red-500">Must be a number</p>
      )}

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
        {initialData
          ? isUpdating
            ? "Updateing..."
            : "Update"
          : isAdding
          ? "Saveing..."
          : "Save"}
      </button>
    </form>
  );
}
