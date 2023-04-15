import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseOnAllCharacters } from '../../api/types'

export const charactersAPI = createApi({
  reducerPath: 'charactersAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<ResponseOnAllCharacters, string>({
      query: (name: string) => ({
        url: '/character',
        params: {
          name: name,
        },
      }),
    }),
  }),
})
