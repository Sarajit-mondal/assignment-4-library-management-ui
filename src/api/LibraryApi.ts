
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const LibraryApi = createApi({
  reducerPath: 'libraryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://assignment-3-library-management-api.vercel.app/api' }),

  endpoints: (builder) => ({
	getBooks: builder.query({
        query: ()=> '/books'
    })
  }),
});


export const {
  useGetBooksQuery,
 
} = LibraryApi;
