import { describe, it, expect } from 'vitest'
import { getAmazonUrl } from '../amazonLink'
import type { BookResult } from '@/types'

function createMockBook(overrides: Partial<BookResult> = {}): BookResult {
  return {
    id: '/works/OL1234W',
    key: '/works/OL1234W',
    title: 'Test Book',
    subtitle: null,
    author: 'Test Author',
    authorKey: null,
    year: 2020,
    coverUrl: 'https://example.com/cover.jpg',
    coverLargeUrl: 'https://example.com/cover-L.jpg',
    isbn: null,
    editionCount: 1,
    languages: ['eng'],
    hasFulltext: false,
    ebookAccess: 'no_ebook',
    publishers: [],
    publishPlaces: [],
    subjects: [],
    ...overrides,
  }
}

describe('getAmazonUrl', () => {
  it('uses ISBN when available', () => {
    const book = createMockBook({
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      isbn: '9780743273565',
    })

    const url = getAmazonUrl(book)
    expect(url).toBe('https://www.amazon.com/s?k=9780743273565')
  })

  it('falls back to title and author when no ISBN', () => {
    const book = createMockBook({
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      isbn: null,
    })

    const url = getAmazonUrl(book)
    expect(url).toContain('The%20Great%20Gatsby')
    expect(url).toContain('F.%20Scott%20Fitzgerald')
  })

  it('encodes special characters', () => {
    const book = createMockBook({
      title: 'Book: A Story & More',
      author: 'Author Name',
      isbn: null,
    })

    const url = getAmazonUrl(book)
    expect(url).toContain('%3A')
    expect(url).toContain('%26')
    expect(url).not.toContain(' ')
  })
})
