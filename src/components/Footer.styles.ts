import styled from 'styled-components'
import { theme } from '@app/theme'
import { flexBetween } from '@/styles/mixins'

export const Wrapper = styled.footer`
  background: transparent;
  color: ${theme.colors.offwhite.vivid};
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  margin-top: auto;
`

export const Inner = styled.div`
  ${flexBetween};
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
  justify-content: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacing.xl};
  }
`

export const Copyright = styled.span`
  font-size: 0.875rem;
  opacity: 0.8;
`

export const Links = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
`

export const LinkItem = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 0.875rem;
  opacity: 0.8;
  transition: opacity ${theme.transitions.fast};

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`
