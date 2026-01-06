import { Wrapper, Grid, Card, IconWrapper, Title, Description } from './FeaturesSection.styles'

const FEATURES = [
  {
    title: 'Instant Search',
    description: 'Find any book from Open Library\'s massive database.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Rich Metadata',
    description: 'Get detailed information including covers, authors, and publication years.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Open Source',
    description: 'Built for everyone and completely free to use.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

export function FeaturesSection() {
  return (
    <Wrapper>
      <Grid>
        {FEATURES.map((feature, index) => (
          <Card key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  )
}
