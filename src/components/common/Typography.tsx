import styled from 'styled-components'
import { theme } from '@app/theme'

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.5rem, 3vw, 2rem);
  color: ${theme.colors.evergreen.veryDark};
  margin: 0;
`

export const SubText = styled.p`
  font-size: 1.0625rem;
  color: ${theme.colors.neutral.medium};
  line-height: 1.6;
  margin: 0;
`

export const MutedText = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.neutral.light};
`

export const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${theme.colors.neutral.light};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`
