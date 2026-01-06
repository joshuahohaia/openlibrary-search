import { useRef, useEffect, useMemo, memo } from 'react'
import { FixedSizeList as List, ListOnScrollProps, ListChildComponentProps } from 'react-window'
import type { BookResult } from '@/types'
import { SEARCH } from '@/constants'
import { ResultItem } from './ResultItem'
import { SkeletonItem } from './SkeletonItem'
import {
  Wrapper,
  Tail,
  Content,
  SkeletonContainer,
  GradientOverlay,
  EmptyState,
} from './ResultsDropdown.styles'

interface ResultsDropdownProps {
  results: BookResult[]
  isLoading: boolean
  isFetchingMore: boolean
  hasMore: boolean
  activeIndex: number
  onItemHover: (index: number) => void
  onLoadMore: () => void
  query: string
}

interface ItemData {
  results: BookResult[]
  activeIndex: number
  onItemHover: (index: number) => void
}

const Row = memo(function Row({ index, style, data }: ListChildComponentProps<ItemData>) {
  const { results, activeIndex, onItemHover } = data
  const book = results[index]

  return (
    <ResultItem
      book={book}
      isActive={index === activeIndex}
      onMouseEnter={() => onItemHover(index)}
      style={style}
    />
  )
})

const LOAD_MORE_THRESHOLD = 450

export function ResultsDropdown({
  results,
  isLoading,
  isFetchingMore,
  hasMore,
  activeIndex,
  onItemHover,
  onLoadMore,
  query,
}: ResultsDropdownProps) {
  const listRef = useRef<List>(null)
  const scrollOffsetRef = useRef(0)

  const totalHeight = results.length * SEARCH.ITEM_HEIGHT
  const viewportHeight = Math.min(totalHeight, SEARCH.DROPDOWN_MAX_HEIGHT)
  const canScroll = totalHeight > SEARCH.DROPDOWN_MAX_HEIGHT
  const maxScroll = totalHeight - viewportHeight

  const handleScroll = ({ scrollOffset }: ListOnScrollProps) => {
    scrollOffsetRef.current = scrollOffset
    if (hasMore && !isFetchingMore && scrollOffset >= maxScroll - LOAD_MORE_THRESHOLD) {
      onLoadMore()
    }
  }

  useEffect(() => {
    if (activeIndex >= 0 && listRef.current) {
      listRef.current.scrollToItem(activeIndex, 'smart')
    }
  }, [activeIndex])

  const itemData = useMemo<ItemData>(() => ({
    results,
    activeIndex,
    onItemHover,
  }), [results, activeIndex, onItemHover])

  // Compute gradient visibility based on current scroll position
  const isAtBottom = scrollOffsetRef.current >= maxScroll - 10

  if (isLoading) {
    return (
      <Wrapper>
        <Tail />
        <Content role="listbox" id="search-results">
          <SkeletonContainer>
            {[0, 1, 2, 3].map((i) => (
              <SkeletonItem key={i} />
            ))}
          </SkeletonContainer>
        </Content>
        <GradientOverlay $visible />
      </Wrapper>
    )
  }

  if (results.length === 0) {
    return (
      <Wrapper>
        <Tail />
        <Content role="listbox" id="search-results">
          <EmptyState>No books found for "{query}"</EmptyState>
        </Content>
      </Wrapper>
    )
  }

  const showGradient = hasMore || (canScroll && !isAtBottom)

  return (
    <Wrapper>
      <Tail />
      <Content role="listbox" id="search-results">
        <List
          ref={listRef}
          height={viewportHeight}
          itemCount={results.length}
          itemSize={SEARCH.ITEM_HEIGHT}
          width="100%"
          onScroll={handleScroll}
          itemData={itemData}
          itemKey={(index, data) => data.results[index].id}
        >
          {Row}
        </List>
      </Content>
      {canScroll && <GradientOverlay $visible={showGradient} />}
    </Wrapper>
  )
}
