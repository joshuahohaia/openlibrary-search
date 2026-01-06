import styled, { keyframes } from 'styled-components'
import { theme } from '@app/theme'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

export const Skeleton = styled.div<{ $visible?: boolean }>`
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

  ${({ $visible }) => $visible !== undefined && `
    opacity: ${$visible ? 1 : 0};
    transition: opacity ${theme.transitions.normal};
    pointer-events: ${$visible ? 'auto' : 'none'};
  `}
`

export const SkeletonText = styled.div<{ $width?: string }>`
  height: 1em;
  width: ${({ $width }) => $width ?? '100%'};
  border-radius: ${theme.radii.xs};
  background: linear-gradient(90deg,
    ${theme.colors.offwhite.calm} 25%,
    ${theme.colors.offwhite.light} 50%,
    ${theme.colors.offwhite.calm} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite;
`
