import { Wrapper, Inner, Copyright, Links, LinkItem } from './Footer.styles'

export function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Copyright>&copy; {new Date().getFullYear()} Bookfinder. Powered by Open Library.</Copyright>
        <Links>
          <LinkItem href="https://openlibrary.org" target="_blank" rel="noopener noreferrer">
            Open Library API
          </LinkItem>
          <LinkItem href="https://github.com/joshuahohaia" target="_blank" rel="noopener noreferrer">
            GitHub
          </LinkItem>
        </Links>
      </Inner>
    </Wrapper>
  )
}