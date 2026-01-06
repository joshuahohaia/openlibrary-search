import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import type { BookResult } from '@/types'
import { API } from '@/constants'
import { useGetBookDetailsQuery } from '@features/search/api/searchApi'
import { Skeleton } from '@/components/common'
import {
  Wrapper,
  Content,
  StickyAside,
  BackButton,
  CoverWrapper,
  CoverImage,
  ButtonGroup,
  LinkButton,
  MainContent,
  Header,
  Title,
  Subtitle,
  Author,
  BadgeGroup,
  Badge,
  MetaGrid,
  MetaItem,
  MetaLabel,
  MetaValue,
  SectionTitle,
  DescriptionWrapper,
  DescriptionText,
  TagGroup,
  Tag,
} from './BookDetail.styles'

function getOpenLibraryUrl(key: string) {
  return `https://openlibrary.org${key}`
}

function getAmazonUrl(book: BookResult) {
  const searchTerm = book.isbn ?? `${book.title} ${book.author}`
  return `${API.AMAZON_SEARCH_URL}?k=${encodeURIComponent(searchTerm)}`
}

function formatLanguages(languages: string[]) {
  const langMap: Record<string, string> = {
    eng: 'English',
    spa: 'Spanish',
    fre: 'French',
    ger: 'German',
    ita: 'Italian',
    por: 'Portuguese',
    rus: 'Russian',
    jpn: 'Japanese',
    chi: 'Chinese',
    ara: 'Arabic',
  }
  return languages.slice(0, 4).map(l => langMap[l] || l.toUpperCase()).join(', ')
}

export function BookDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const book = location.state?.book as BookResult | undefined
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageLoaded(false)
  }, [book?.key])

  const { data: details, isLoading: isLoadingDetails } = useGetBookDetailsQuery(book?.key ?? '', {
    skip: !book?.key
  })

  if (!book) {
    return <Navigate to="/" replace />
  }

  const description = typeof details?.description === 'string' 
    ? details.description 
    : details?.description?.value

  const hasDescription = !isLoadingDetails && !!description

  return (
    <Wrapper>
      <Content>
        <StickyAside>
          <BackButton onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </BackButton>

          <CoverWrapper>
            <Skeleton $visible={!imageLoaded} />
            <CoverImage
              src={book.coverLargeUrl}
              alt={book.title}
              $loaded={imageLoaded}
              onLoad={() => setImageLoaded(true)}
            />
          </CoverWrapper>

          <ButtonGroup>
            <LinkButton
              href={getAmazonUrl(book)}
              target="_blank"
              rel="noopener noreferrer"
              $variant="primary"
              $size="sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Find on Amazon
            </LinkButton>
            <LinkButton
              href={getOpenLibraryUrl(book.key)}
              target="_blank"
              rel="noopener noreferrer"
              $variant="secondary"
              $size="sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View on OpenLibrary
            </LinkButton>
          </ButtonGroup>
        </StickyAside>

        <MainContent>
          <Header>
            <Title>{book.title}</Title>
            {book.subtitle && <Subtitle>{book.subtitle}</Subtitle>}
            <Author>by {book.author}</Author>
            
            <BadgeGroup>
              {book.hasFulltext && <Badge $variant="success">Full Text Available</Badge>}
              {book.ebookAccess === 'public' && <Badge $variant="info">Free eBook</Badge>}
              {book.editionCount > 1 && <Badge>{book.editionCount} editions</Badge>}
            </BadgeGroup>
          </Header>

          <MetaGrid>
            {book.year && (
              <MetaItem>
                <MetaLabel>First Published</MetaLabel>
                <MetaValue>{book.year}</MetaValue>
              </MetaItem>
            )}
            {book.isbn && (
              <MetaItem>
                <MetaLabel>ISBN</MetaLabel>
                <MetaValue>{book.isbn}</MetaValue>
              </MetaItem>
            )}
            {book.languages.length > 0 && (
              <MetaItem>
                <MetaLabel>Language</MetaLabel>
                <MetaValue>{formatLanguages(book.languages)}</MetaValue>
              </MetaItem>
            )}
            {book.publishers?.length > 0 && (
              <MetaItem>
                <MetaLabel>Publisher</MetaLabel>
                <MetaValue>{book.publishers[0]}</MetaValue>
              </MetaItem>
            )}
            {book.publishPlaces?.length > 0 && (
              <MetaItem>
                <MetaLabel>Published In</MetaLabel>
                <MetaValue>{book.publishPlaces[0]}</MetaValue>
              </MetaItem>
            )}
          </MetaGrid>

          {hasDescription && (
            <section>
              <SectionTitle>About the Work</SectionTitle>
              <DescriptionWrapper>
                <DescriptionText>
                  {description.split('\n').map((para, i) => (
                    para ? <p key={i}>{para}</p> : <br key={i}/>
                  ))}
                </DescriptionText>
              </DescriptionWrapper>
            </section>
          )}

          {book.subjects?.length > 0 && (
            <section>
              <SectionTitle>Subjects</SectionTitle>
              <TagGroup>
                {book.subjects.slice(0, 15).map(subject => (
                  <Tag key={subject}>{subject}</Tag>
                ))}
              </TagGroup>
            </section>
          )}
        </MainContent>
      </Content>
    </Wrapper>
  )
}
