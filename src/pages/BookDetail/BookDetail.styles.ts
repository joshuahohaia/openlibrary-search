import styled from 'styled-components'
import { theme } from '@app/theme'
import { media } from '@/styles'
import { TextButton, ButtonLink } from '@/components/common'

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};

  ${media.mobile} {
    padding: ${theme.spacing.md};
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${theme.spacing.xxl};
  align-items: start;

  ${media.tablet} {
    grid-template-columns: 240px 1fr;
    gap: ${theme.spacing.xl};
  }

  ${media.mobile} {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xl};
  }
`

export const StickyAside = styled.aside`
  position: sticky;
  top: calc(80px + ${theme.spacing.lg});
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.controlX};
  height: fit-content;

  ${media.mobile} {
    position: static;
    width: 100%;
    align-items: center;
  }
`

export const BackButton = styled(TextButton)`
  min-height: 20px;
  align-self: flex-start;

  svg {
    width: 16px;
    height: 16px;
  }
`

export const CoverWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;
  background: ${theme.colors.offwhite.calm};
  border-radius: ${theme.radii.md};
  box-shadow: ${theme.shadows.lg};
  overflow: hidden;

  ${media.mobile} {
    max-width: 200px;
  }
`

export const CoverImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity ${theme.transitions.normal};
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
  width: 100%;
`

export const LinkButton = styled(ButtonLink)`
  svg {
    width: 14px;
    height: 14px;
    opacity: 0.85;
  }
`

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  min-width: 0; /* Prevents overflow in grid items */
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`

export const Title = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 4vw, 3rem);
  color: ${theme.colors.evergreen.veryDark};
  line-height: 1.1;
  margin: 0;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.offwhite.vivid};
  font-style: italic;
  margin: 0;
`

export const Author = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.evergreen.veryDark};
  font-weight: 500;
  margin: ${theme.spacing.xs} 0;
`

export const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.xs};
`

export const Badge = styled.span<{ $variant?: 'success' | 'info' }>`
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: ${theme.radii.pill};
  background: ${({ $variant }) => {
    if ($variant === 'success') return theme.colors.evergreen.light
    if ($variant === 'info') return theme.colors.evergreen.light
    return theme.colors.offwhite.calm
  }};
  color: ${({ $variant }) => {
    if ($variant === 'success') return theme.colors.evergreen.dark
    if ($variant === 'info') return theme.colors.evergreen.dark
    return theme.colors.offwhite.vivid
  }};
`

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${theme.spacing.lg} ${theme.spacing.xl};
  padding: ${theme.spacing.lg} 0;
  border-top: 1px solid ${theme.colors.offwhite.calm};
  border-bottom: 1px solid ${theme.colors.offwhite.calm};
`

export const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const MetaLabel = styled.dt`
  font-size: 0.75rem;
  color: ${theme.colors.evergreen.veryDark};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`

export const MetaValue = styled.dd`
  font-size: 0.9375rem;
  color: ${theme.colors.evergreen.veryDark};
  margin: 0;
  font-weight: 500;
`

export const SectionTitle = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.5rem;
  color: ${theme.colors.evergreen.veryDark};
  margin-bottom: ${theme.spacing.md};
`

export const DescriptionWrapper = styled.div`
  position: relative;
`

export const DescriptionText = styled.div`
  font-size: 1.0625rem;
  line-height: 1.7;
  color: ${theme.colors.evergreen.veryDark};
  
  p {
    margin-bottom: ${theme.spacing.md};
  }
`

export const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`

export const Tag = styled.span`
  font-size: 0.8125rem;
  color: ${theme.colors.evergreen.dark};
  background: ${theme.colors.offwhite.calm};
  padding: 5px 12px;
  border-radius: ${theme.radii.pill};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.offwhite.vivid};
    color: ${theme.colors.surface};
  }
`
