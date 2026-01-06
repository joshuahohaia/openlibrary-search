import styled from "styled-components";
import { theme } from "@app/theme";
import { media, slideDown } from "@/styles";
import { HEADER, SEARCH } from "@/constants";

export const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 17px);
  right: 0px;
  width: 434px;
  max-height: ${SEARCH.DROPDOWN_MAX_HEIGHT}px;
  z-index: 1000;

  ${media.mobile} {
    position: fixed;
    top: ${HEADER.HEIGHT}px;
    left: 0;
    right: 0;
    width: 100%;
    max-height: calc(100vh - ${HEADER.HEIGHT}px);
  }
`;

export const Tail = styled.div`
  position: absolute;
  top: -5px;
  right: 110px;
  width: 12px;
  height: 12px;
  background: ${theme.colors.surface};
  border-left: 1px solid ${theme.colors.offwhite.calm};
  border-top: 1px solid ${theme.colors.offwhite.calm};
  transform: rotate(45deg);
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 0 100%);

  ${media.mobile} {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  background: ${theme.colors.surface};
  border: 1px solid ${theme.colors.offwhite.calm};
  border-radius: ${theme.radii.xs};
  box-shadow: ${theme.shadows.lg};
  padding: ${theme.spacing.sm} ${theme.spacing.sm} 0 ${theme.spacing.sm};
  overflow: hidden;
  animation: ${slideDown} 150ms ease;

  ${media.mobile} {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

export const SkeletonContainer = styled.div`
  height: ${SEARCH.DROPDOWN_MAX_HEIGHT}px;
  overflow: hidden;
`

export const GradientOverlay = styled.div<{ $visible: boolean }>`
  position: absolute;
  bottom: -9px;
  left: 1px;
  right: 1px;
  border-radius: ${theme.radii.xs};
  height: 58px;
  background: linear-gradient(transparent, ${theme.colors.fade});
  pointer-events: none;
  z-index: 2;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity ${theme.transitions.normal};
`;

export const EmptyState = styled.div`
  padding: ${theme.spacing.lg};
  text-align: center;
  color: ${theme.colors.offwhite.vivid};
`;
