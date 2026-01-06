import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLazySearchBooksQuery } from '@features/search/api/searchApi'
import { Button, SpinningIcon } from './common'
import { Section, Container, Title, Description, ErrorText } from './LuckySection.styles'

const TERMS = [
  'fantasy', 'scifi', 'love', 'history', 'cats', 'dogs',
  'art', 'music', 'code', 'space', 'magic', 'adventure',
  'mystery', 'horror', 'romance', 'science', 'nature',
  'travel', 'cooking', 'poetry', 'philosophy', 'psychology'
]

export function LuckySection() {
  const navigate = useNavigate()
  const [trigger, { isFetching }] = useLazySearchBooksQuery()
  const [error, setError] = useState(false)

  const handleLucky = async () => {
    setError(false)
    try {
      const randomTerm = TERMS[Math.floor(Math.random() * TERMS.length)]
      const { data } = await trigger({ query: randomTerm, offset: 0 }, true)

      if (data?.results?.length) {
        const randomBook = data.results[Math.floor(Math.random() * data.results.length)]
        navigate(`/book/${encodeURIComponent(randomBook.id)}`, { state: { book: randomBook } })
      } else {
        setError(true)
      }
    } catch (e) {
      console.error("Lucky search failed", e)
      setError(true)
    }
  }

  return (
    <Section>
      <Container>
        <Title>Not sure what to read next?</Title>
        <Description>
          Discover a random book from our collection of millions.
        </Description>
        <Button onClick={handleLucky} disabled={isFetching}>
          <SpinningIcon $spinning={isFetching} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </SpinningIcon>
          I'm Feeling Lucky
        </Button>
        {error && (
          <ErrorText>
            Luck ran out this time. Please try again!
          </ErrorText>
        )}
      </Container>
    </Section>
  )
}
