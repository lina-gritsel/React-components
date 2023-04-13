import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<any, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name: name,
        },
      }),
    }),
  }),
})
