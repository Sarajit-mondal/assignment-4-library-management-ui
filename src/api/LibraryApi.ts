
import type { Book } from '@/interface/Interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// local api = http://localhost:8000/
// deploy api = https://assignment-3-library-management-api.vercel.app/
export const LibraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-3-library-management-api.vercel.app/api' }),
  tagTypes : ["Books","Borrow"], 

  endpoints: (builder) => ({
  getBooks: builder.query({
        query: ()=> '/books',
        providesTags : ['Books']
    }),
    addBook: builder.mutation<Book , Partial<Book>>({
      query: (newBook) => ({
        url: '/books',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags:['Books']
    }),
    updateBook: builder.mutation<Book, Book>({
      query: (book) => ({
        url: `/books/${book._id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ["Books"]
    }),


    deleteBook : builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"]
    }),

     //borrow book
  getBorrowBook: builder.query({
    query: ()=> '/borrow',
    providesTags :["Borrow"]
  })

  }),

 

});



export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowBookQuery
} = LibraryApi;
