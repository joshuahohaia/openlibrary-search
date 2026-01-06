import { forwardRef } from 'react'
import { Wrapper, Input, Icon, Spinner } from './SearchInput.styles'

interface SearchInputProps {
  value: string
  onChange: (value: string) => void
  onFocus: () => void
  onKeyDown: (event: React.KeyboardEvent) => void
  isOpen: boolean
  isLoading?: boolean
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ value, onChange, onFocus, onKeyDown, isOpen, isLoading }, ref) => {
    return (
      <Wrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </Icon>
        )}
        <Input
          ref={ref}
          id="book-search"
          name="book-search"
          type="text"
          placeholder="Quick search..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          autoComplete="off"
          $isOpen={isOpen}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-results"
          aria-autocomplete="list"
        />
      </Wrapper>
    )
  }
)

SearchInput.displayName = 'SearchInput'
