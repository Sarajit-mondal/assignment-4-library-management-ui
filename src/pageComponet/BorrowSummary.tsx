/* BookSummaryTable.tsx */
import { useGetBorrowBookQuery } from "@/api/LibraryApi";



const BorrowSummary= () => {

 const {data:BorrowBook}= useGetBorrowBookQuery({})
console.log(BorrowBook)
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

          {/* <tbody className="bg-white divide-y divide-gray-100">
            {BorrowBook?.map(({ title, totalQuantity, dueDate }, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 whitespace-nowrap">{title}</td>
                <td className="px-4 py-2">{totalQuantity}</td>
                <td className="px-4 py-2">
                  {new Date(dueDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </section>
  );
};

export default BorrowSummary