import styled from 'styled-components'
import { theme } from '@app/theme'

export const Badge = styled.span<{ $variant?: 'default' | 'success' }>`
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-radius: ${theme.radii.pill};

  background: ${({ $variant }) =>
    $variant === 'success' ? theme.colors.evergreen.light : theme.colors.offwhite.calm};
  color: ${({ $variant }) =>
    $variant === 'success' ? theme.colors.evergreen.dark : theme.colors.offwhite.vivid};
`

export const Tag = styled.span`
  font-size: 0.8125rem;
  color: ${theme.colors.neutral.dark};
  background: ${theme.colors.offwhite.calm};
  padding: 5px 12px;
  border-radius: ${theme.radii.pill};
  transition: all ${theme.transitions.fast};

  &:hover {
    background: ${theme.colors.offwhite.vivid};
    color: ${theme.colors.surface};
  }
`
