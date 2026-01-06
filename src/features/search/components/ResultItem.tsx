import { CSSProperties, useCallback, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import type { BookResult } from '@/types'
import { useCachedImage } from '@/hooks'
import {
  Wrapper,
  CoverWrapper,
  CoverImage,
  Skeleton,
  Info,
  Title,
  Author,
  Year,
  ChevronIcon,
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

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/book/${encodeURIComponent(book.id)}`, { state: { book } })
  }, [navigate, book])

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
      <ChevronIcon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18l6-6-6-6" />
      </ChevronIcon>
    </Wrapper>
  )
})
