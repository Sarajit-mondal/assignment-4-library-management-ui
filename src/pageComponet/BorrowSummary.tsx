/* BookSummaryTable.tsx */
import { useGetBorrowBookQuery } from "@/api/LibraryApi";

interface BookRow {
  book:{
    title: string;
    isbn:string;
  },
  totalQuantity: number;
      // ISO string, e.g. "2025-07-04"
}



const BorrowSummary= () => {
  // Ensure rows is always an array
 const {
  data:borrowBook ,
  isLoading,
  isError,
  error,
} = useGetBorrowBookQuery(undefined);
if (isLoading) return <p>Loading…</p>;
if (isError)   return <p>Error: {((error as { message?: string })?.message ?? "Unknown error")}</p>;
  return (
    <section className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg">
      {/* Table title */}
      <h1 className="text-2xl font-semibold text-indigo-700 mb-4">
        Borrow Book list
      </h1>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Title
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                ISBN
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Total Quantity
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {borrowBook?.data?.map(( book :BookRow, idx:number) => (
              <tr key={idx}>
                <td className="px-4 py-2 whitespace-nowrap">{book.book.title}</td>
                <td className="px-4 py-2">
                  {book.book.isbn}
                </td>
                <td className="px-4 py-2">{book.totalQuantity}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BorrowSummary