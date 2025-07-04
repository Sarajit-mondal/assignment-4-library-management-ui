/* BookSummaryTable.tsx */
import React from "react";

interface BookRow {
  title: string;
  totalQuantity: number;
  dueDate: string;     // ISO string, e.g. "2025-07-04"
}


const BorrowBook: BookRow[] = [
  {
    title: "The Theory of Everything",
    totalQuantity: 7,
    dueDate: "2025-07-04",
  },
  {
    title: "A Brief History of Time",
    totalQuantity: 3,
    dueDate: "2025-08-15",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    totalQuantity: 5,
    dueDate: "2025-09-01",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    totalQuantity: 9,
    dueDate: "2025-10-10",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    totalQuantity: 5,
    dueDate: "2025-09-01",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    totalQuantity: 9,
    dueDate: "2025-10-10",
  },
];


const BorrowSummary= () => {
  // Ensure rows is always an array

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
                Total Quantity
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Due Date
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-100">
            {BorrowBook?.map(({ title, totalQuantity, dueDate }, idx) => (
              <tr key={idx}>
                <td className="px-4 py-2 whitespace-nowrap">{title}</td>
                <td className="px-4 py-2">{totalQuantity}</td>
                <td className="px-4 py-2">
                  {new Date(dueDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BorrowSummary