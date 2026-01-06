import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { BookResult } from '@/types'
import { API, SEARCH } from '@/constants'

interface OpenLibraryDoc {
  key: string
  title: string
  subtitle?: string
  author_name?: string[]
  author_key?: string[]
  first_publish_year?: number
  cover_i?: number
  isbn?: string[]
  edition_count?: number
  language?: string[]
  has_fulltext?: boolean
  ebook_access?: string
  publisher?: string[]
  publish_place?: string[]
  subject?: string[]
}

interface OpenLibraryResponse {
  docs: OpenLibraryDoc[]
  numFound: number
}

interface WorkDetailsResponse {
  description?: string | { value: string }
  title: string
}

export interface SearchQueryArgs {
  query: string
  offset?: number
}

export interface SearchResult {
  results: BookResult[]
  totalResults: number
  hasMore: boolean
}

const PLACEHOLDER_COVER = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72' fill='%239A9288'%3E%3Crect width='72' height='72' fill='%23EAE0D7'/%3E%3Cpath d='M36 22c-6.2-4.8-15-4-21 1v26c6-4 14.8-4.8 21 0 6.2-4.8 15-4 21 0V23c-6-5-14.8-5.8-21-1zm-3 22c-4-1.6-8.4-1.8-12-.8V27c3.6-1 8-.8 12 .8v17.2zm18 1.2c-3.6-1-8-.8-12 .8V27.8c4-1.6 8.4-1.8 12-.8v19.2z'/%3E%3C/svg%3E`

function transformDocs(docs: OpenLibraryDoc[]): BookResult[] {
  return docs.map((doc) => ({
    id: doc.key,
    key: doc.key,
    title: doc.title,
    subtitle: doc.subtitle ?? null,
    author: doc.author_name?.[0] ?? 'Unknown Author',
    authorKey: doc.author_key?.[0] ?? null,
    year: doc.first_publish_year ?? null,
    coverUrl: doc.cover_i
      ? `${API.COVER_BASE_URL}/${doc.cover_i}-M.jpg`
      : PLACEHOLDER_COVER,
    coverLargeUrl: doc.cover_i
      ? `${API.COVER_BASE_URL}/${doc.cover_i}-L.jpg`
      : PLACEHOLDER_COVER,
    isbn: doc.isbn?.[0] ?? null,
    editionCount: doc.edition_count ?? 0,
    languages: doc.language ?? [],
    hasFulltext: doc.has_fulltext ?? false,
    ebookAccess: doc.ebook_access ?? 'no_ebook',
    publishers: doc.publisher?.slice(0, 5) ?? [],
    publishPlaces: doc.publish_place?.slice(0, 3) ?? [],
    subjects: doc.subject?.slice(0, 5) ?? [],
  }))
}

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: API.BASE_URL }),
  endpoints: (builder) => ({
    searchBooks: builder.query<SearchResult, SearchQueryArgs>({
      query: ({ query, offset = 0 }) =>
        `/search.json?q=${encodeURIComponent(query)}&limit=${SEARCH.RESULTS_LIMIT}&offset=${offset}`,
      transformResponse: (response: OpenLibraryResponse, _meta, arg): SearchResult => {
        const results = transformDocs(response.docs)
        const currentOffset = arg.offset ?? 0
        return {
          results,
          totalResults: response.numFound,
          hasMore: currentOffset + results.length < response.numFound,
        }
      },
      serializeQueryArgs: ({ queryArgs }) => queryArgs.query,
      merge: (currentCache, newItems, { arg }) => {
        if (arg.offset === 0 || arg.offset === undefined) {
          return newItems
        }
        return {
          ...newItems,
          results: [...currentCache.results, ...newItems.results],
        }
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        if (currentArg?.offset === 0 || currentArg?.offset === undefined) {
          return true
        }
        return currentArg?.offset !== previousArg?.offset
      },
    }),
    getBookDetails: builder.query<WorkDetailsResponse, string>({
      query: (key) => `${key}.json`,
    }),
  }),
})

export const { useSearchBooksQuery, useLazySearchBooksQuery, useGetBookDetailsQuery } = searchApi