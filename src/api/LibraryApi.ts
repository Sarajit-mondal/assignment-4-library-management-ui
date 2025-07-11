
import type { Book } from '@/interface/Interface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



// local api = http://localhost:8000/
// deploy api = https://assignment-3-library-management-api.vercel.app/
export const LibraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-3-library-management-api.vercel.app' }),
  
  tagTypes : ["Books","Borrow"], 

  endpoints: (builder) => ({
  // getBooks: builder.query({
  //       query: ()=> '/api/books',
  //       providesTags : ['Books']
  //   }),
   getBooks: builder.query({
      query: (args = {}) => {
        // provide defaults
        const { sortBy = 'createdAt', limit = 10,skip=1, filter } = args;

        const params = new URLSearchParams({
          sortBy,
          skip,
          limit: limit.toString(),
        });

        if (filter) params.set('filter', filter);

        // → GET /books?sortBy=createdAt&limit=1&filter=SCIENCE
        return `/api/books?${params.toString()}`;
      },
      providesTags:["Books"]
    }),
  
    addBook: builder.mutation<Book , Partial<Book>>({
      query: (newBook) => ({
        url: '/api/books',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags:['Books']
    }),
    updateBook: builder.mutation<Book, Book>({
      query: (book) => ({
        url: `/api/books/${book._id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ["Books"]
    }),


    deleteBook : builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"]
    }),

     //borrow book
  getBorrowBook: builder.query({
    query: ()=> '/api/borrow',
    providesTags :["Borrow"]
  }),
  BorrowBook:builder.mutation({
   query: (BookBorrow) => ({
        url: '/api/borrow',
        method: 'POST',
        body: BookBorrow,
      }),
      invalidatesTags:["Books","Borrow"]
  })


  }),

 

});



export const {
  useGetBooksQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetBorrowBookQuery,
  useBorrowBookMutation
} = LibraryApi;
