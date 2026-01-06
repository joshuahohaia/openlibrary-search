import styled, { css, keyframes } from 'styled-components'
import { theme } from '@app/theme'

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing.sm};
  border: none;
  font-family: ${theme.fonts.body};
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  transition: all ${theme.transitions.fast};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
  }
`

export const Button = styled.button<{ $variant?: 'primary' | 'secondary'; $size?: 'sm' | 'md' }>`
  ${buttonBase}

  padding: ${({ $size }) => $size === 'sm' ? '8px 16px' : '10px 24px'};
  font-size: ${({ $size }) => $size === 'sm' ? '0.8125rem' : '0.9375rem'};
  border-radius: ${theme.radii.pill};

  ${({ $variant = 'primary' }) => $variant === 'primary' ? css`
    background: ${theme.colors.neutral.dark};
    color: ${theme.colors.surface};

    &:hover:not(:disabled) {
      background: ${theme.colors.neutral.medium};
    }
  ` : css`
    background: ${theme.colors.offwhite.calm};
    color: ${theme.colors.neutral.dark};

    &:hover:not(:disabled) {
      background: ${theme.colors.offwhite.vivid};
      color: ${theme.colors.surface};
    }
  `}
`

export const ButtonLink = styled.a<{ $variant?: 'primary' | 'secondary'; $size?: 'sm' | 'md' }>`
  ${buttonBase}

  padding: ${({ $size }) => $size === 'sm' ? '8px 16px' : '10px 24px'};
  font-size: ${({ $size }) => $size === 'sm' ? '0.8125rem' : '0.9375rem'};
  border-radius: ${theme.radii.pill};

  ${({ $variant = 'primary' }) => $variant === 'primary' ? css`
    background: ${theme.colors.neutral.dark};
    color: ${theme.colors.surface};

    &:hover {
      background: ${theme.colors.neutral.medium};
      text-decoration: none;
    }
  ` : css`
    background: ${theme.colors.offwhite.calm};
    color: ${theme.colors.neutral.dark};

    &:hover {
      background: ${theme.colors.offwhite.vivid};
      color: ${theme.colors.surface};
      text-decoration: none;
    }
  `}
`

export const TextButton = styled.button`
  ${buttonBase}
  background: none;
  padding: 0;
  font-size: 0.8125rem;
  color: ${theme.colors.neutral.light};

  &:hover:not(:disabled) {
    color: ${theme.colors.neutral.dark};
  }
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const SpinningIcon = styled.svg<{ $spinning?: boolean }>`
  flex-shrink: 0;
  animation: ${({ $spinning }) => ($spinning ? spin : 'none')} 1s linear infinite;
`
