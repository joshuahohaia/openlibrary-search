import { CSSProperties, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { BookResult } from '@/types'
import { useCachedImage } from '@/hooks'
import { API } from '@/constants'
import {
  Wrapper,
  CoverWrapper,
  CoverImage,
  Skeleton,
  Info,
  Title,
  Author,
  Year,
  AmazonButton,
} from './ResultItem.styles'

interface ResultItemProps {
  book: BookResult
  isActive: boolean
  onMouseEnter: () => void
  style: CSSProperties
}

export const ResultItem = memo(function ResultItem({ book, isActive, onMouseEnter, style }: ResultItemProps) {
  const navigate = useNavigate()
  const { loaded, imgRef, handleLoad } = useCachedImage(book.coverUrl)

  const amazonUrl = `${API.AMAZON_SEARCH_URL}?k=${encodeURIComponent(book.isbn ?? `${book.title} ${book.author}`)}`

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/book/${encodeURIComponent(book.id)}`, { state: { book } })
  }, [navigate, book])

  const handleAmazonClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  return (
    <Wrapper
      href={`/book/${encodeURIComponent(book.id)}`}
      onClick={handleClick}
      $isActive={isActive}
      onMouseEnter={onMouseEnter}
      style={style}
      role="option"
      aria-selected={isActive}
    >
      <CoverWrapper>
        {!loaded && <Skeleton />}
        <CoverImage
          ref={imgRef}
          src={book.coverUrl}
          alt=""
          $loaded={loaded}
          onLoad={handleLoad}
        />
      </CoverWrapper>
      <Info>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        {book.year && <Year>{book.year}</Year>}
      </Info>
      <AmazonButton
        href={amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleAmazonClick}
        aria-label={`Find "${book.title}" on Amazon`}
        title="Find on Amazon"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      </AmazonButton>
    </Wrapper>
  )
})
