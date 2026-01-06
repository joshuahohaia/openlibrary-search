import type { BookResult } from '@/types'
import { API } from '@/constants'

export function getAmazonUrl(book: BookResult): string {
  const searchTerm = book.isbn ?? `${book.title} ${book.author}`
  return `${API.AMAZON_SEARCH_URL}?k=${encodeURIComponent(searchTerm)}`
}
