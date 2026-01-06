import { Wrapper, Logo, SearchContainer } from './Header.styles'

export function Header() {
  return (
    <Wrapper>
      <Logo href="/">
        Bookfinder
      </Logo>
      <SearchContainer>
        {/* SearchWidget will be added here */}
      </SearchContainer>
    </Wrapper>
  )
}
