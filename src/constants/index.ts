export const SEARCH = {
  DEBOUNCE_MS: 300,
  MIN_QUERY_LENGTH: 3,
  RESULTS_LIMIT: 20,
  ITEM_HEIGHT: 92,
  DROPDOWN_MAX_HEIGHT: 320,
} as const

export const HEADER = {
  HEIGHT: 60,
} as const

export const API = {
  BASE_URL: 'https://openlibrary.org',
  COVER_BASE_URL: 'https://covers.openlibrary.org/b/id',
  AMAZON_SEARCH_URL: 'https://www.amazon.com/s',
} as const

export const KEYBOARD = {
  ESCAPE: 'Escape',
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ENTER: 'Enter',
} as const
