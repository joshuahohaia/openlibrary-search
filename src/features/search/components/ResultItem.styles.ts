import styled, { keyframes } from 'styled-components'
import { theme } from '@app/theme'
import { truncate } from '@/styles'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const Title = styled.span`
  font-weight: 500;
  color: ${theme.colors.evergreen.veryDark};
  line-height: 1.3;
  ${truncate()}
`

export const AmazonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: ${theme.radii.sm};
  border: none;
  background: transparent;
  color: ${theme.colors.offwhite.vivid};
  flex-shrink: 0;
  opacity: 0;
  cursor: pointer;
  transition: opacity ${theme.transitions.fast}, color ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.evergreen.dark};
  }

  svg {
    width: 14px;
    height: 14px;
  }
`

export const Wrapper = styled.a<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  text-decoration: none;
  color: inherit;
  background-color: ${({ $isActive }) =>
    $isActive ? theme.colors.evergreen.light : 'transparent'};

  &:hover {
    text-decoration: none;
    background-color: ${theme.colors.evergreen.light};
  }

  &:hover ${Title} {
    text-decoration: underline;
  }

  &:hover ${AmazonButton} {
    opacity: 1;
  }
`

export const CoverWrapper = styled.div`
  width: 48px;
  height: 72px; 
  border-radius: ${theme.radii.xs};
  background: ${theme.colors.offwhite.calm};
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
`

export const CoverImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity ${theme.transitions.fast};
`

export const Skeleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    ${theme.colors.offwhite.calm} 25%, 
    ${theme.colors.offwhite.light} 50%, 
    ${theme.colors.offwhite.calm} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`

export const Info = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Author = styled.span`
  font-size: 0.875rem;
  color: ${theme.colors.offwhite.vivid};
  ${truncate()}
`

export const Year = styled.span`
  font-size: 0.75rem;
  color: ${theme.colors.offwhite.vivid};
  ${truncate()}
`

