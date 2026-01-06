import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useSearchBooksQuery } from '../api/searchApi'
import {
  setQuery,
  openDropdown,
  closeDropdown,
  setActiveIndex,
  setOffset,
  resetSearch,
  selectQuery,
  selectIsOpen,
  selectActiveIndex,
  selectOffset,
} from '../searchSlice'
import { useAppDispatch, useAppSelector } from '@app/hooks'
import { useDebounce, useClickOutside, useHotkey } from '@/hooks'
import { SEARCH, KEYBOARD, API } from '@/constants'
import { SearchInput } from './SearchInput'
import { ResultsDropdown } from './ResultsDropdown'

const Wrapper = styled.div`
  position: relative;
`

export function SearchWidget() {
  const dispatch = useAppDispatch()
  const query = useAppSelector(selectQuery)
  const isOpen = useAppSelector(selectIsOpen)
  const activeIndex = useAppSelector(selectActiveIndex)
  const offset = useAppSelector(selectOffset)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const location = useLocation()

  useEffect(() => {
    dispatch(resetSearch())
  }, [dispatch, location.pathname])

  const debouncedQuery = useDebounce(query, SEARCH.DEBOUNCE_MS)
  const shouldFetch = debouncedQuery.length >= SEARCH.MIN_QUERY_LENGTH

  const { data, isLoading, isFetching } = useSearchBooksQuery(
    { query: debouncedQuery, offset },
    { skip: !shouldFetch }
  )

  const isDebouncing = query !== debouncedQuery
  const isBelowMinLength = query.length < SEARCH.MIN_QUERY_LENGTH
  const results = (isDebouncing || isBelowMinLength) ? [] : (data?.results ?? [])
  const hasMore = data?.hasMore ?? false
  const showDropdown = isOpen && query.length >= 1

  const handleClose = () => dispatch(closeDropdown())

  useClickOutside(wrapperRef, handleClose)

  useHotkey({ key: 'k', ctrl: true }, (e: KeyboardEvent) => {
    e.preventDefault()
    inputRef.current?.focus()
  })

  useHotkey(KEYBOARD.ESCAPE, () => {
    handleClose()
    inputRef.current?.blur()
  })

  const handleKeyNavigation = (event: React.KeyboardEvent) => {
    if (!results.length) return

    switch (event.key) {
      case KEYBOARD.ARROW_DOWN:
        event.preventDefault()
        if (activeIndex < results.length - 1) {
          dispatch(setActiveIndex(activeIndex + 1))
        }
        break
      case KEYBOARD.ARROW_UP:
        event.preventDefault()
        if (activeIndex > 0) {
          dispatch(setActiveIndex(activeIndex - 1))
        }
        break
      case KEYBOARD.ENTER:
        if (activeIndex >= 0 && results[activeIndex]) {
          const book = results[activeIndex]
          const searchTerm = book.isbn ?? `${book.title} ${book.author}`
          window.open(`${API.AMAZON_SEARCH_URL}?k=${encodeURIComponent(searchTerm)}`, '_blank')
        }
        break
    }
  }

  const handleLoadMore = () => {
    if (hasMore && !isFetching) {
      dispatch(setOffset(results.length))
    }
  }

  return (
    <Wrapper ref={wrapperRef}>
      <SearchInput
        ref={inputRef}
        value={query}
        onChange={(value) => dispatch(setQuery(value))}
        onFocus={() => dispatch(openDropdown())}
        onKeyDown={handleKeyNavigation}
        isOpen={showDropdown}
        isLoading={isFetching}
      />
      {showDropdown && (
        <ResultsDropdown
          results={results}
          isLoading={isBelowMinLength || isDebouncing || ((isLoading || isFetching) && offset === 0)}
          isFetchingMore={isFetching && offset > 0}
          hasMore={hasMore}
          activeIndex={activeIndex}
          onItemHover={(index) => dispatch(setActiveIndex(index))}
          onLoadMore={handleLoadMore}
          query={query}
        />
      )}
    </Wrapper>
  )
}
