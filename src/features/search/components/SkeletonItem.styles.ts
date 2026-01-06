import styled, { keyframes } from 'styled-components'
import { theme } from '@app/theme'
import { SEARCH } from '@/constants'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  height: ${SEARCH.ITEM_HEIGHT}px;
`

export const SkeletonBox = styled.div<{ $width?: string; $height?: string }>`
  background: linear-gradient(90deg,
    ${theme.colors.offwhite.calm} 25%,
    ${theme.colors.offwhite.light} 50%,
    ${theme.colors.offwhite.calm} 75%
  );
  background-size: 200% 100%;
  border-radius: ${theme.radii.xs};
  animation: ${shimmer} 1.5s infinite;
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '16px'};
`

export const CoverSkeleton = styled(SkeletonBox)`
  width: 48px;
  height: 72px;
  flex-shrink: 0;
`

export const Info = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`
