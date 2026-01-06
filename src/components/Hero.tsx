import { Wrapper, Headline, Subtext, Hint, Kbd } from './Hero.styles'

export function Hero() {
  return (
    <Wrapper>
      <Headline>Discover your next great book</Headline>
      <Subtext>Search millions of books, authors, and genres</Subtext>
      <Hint>
        Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to search
      </Hint>
    </Wrapper>
  )
}
