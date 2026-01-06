import styled, { css, keyframes } from "styled-components";
import { theme } from "@app/theme";
import { media } from "@/styles";

const spin = keyframes`
  from { transform: translateY(-50%) rotate(0deg); }
  to { transform: translateY(-50%) rotate(360deg); }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 238px;

  ${media.tablet} {
    width: 200px;
  }

  ${media.mobile} {
    width: 160px;
  }
`;

const openStyles = css`
  border-color: ${theme.colors.offwhite.vivid};
  background: ${theme.colors.surface};
`;

export const Input = styled.input<{ $isOpen: boolean }>`
  border-radius: ${theme.radii.xs};
  width: 100%;
  height: 42px;
  max-height: 42px;
  /* Reduced top padding to move text visually up */
  padding: 6px ${theme.spacing.controlX} ${theme.spacing.controlY};
  padding-right: 40px; /* Space for end-adorned icon */
  font-size: 0.9375rem;
  color: ${theme.colors.evergreen.veryDark};
  background: ${theme.colors.offwhite.light};
  border: 1px solid ${theme.colors.offwhite.calm};
  transition: all ${theme.transitions.fast};

  &::placeholder {
    color: ${theme.colors.offwhite.vivid};
  }

  &:hover {
    border-color: ${theme.colors.offwhite.vivid};
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.offwhite.vivid};
    background: ${theme.colors.surface};
    box-shadow: ${theme.shadows.sm};
  }

  ${({ $isOpen }) => $isOpen && openStyles}
`;

export const Icon = styled.svg`
  position: absolute;
  right: ${theme.spacing.controlX}; /* End adorned */
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: ${theme.colors.offwhite.vivid};
  pointer-events: none;
`;

export const Spinner = styled.div`
  position: absolute;
  right: ${theme.spacing.controlX}; /* End adorned */
  top: 50%;
  width: 18px;
  height: 18px;
  border: 2px solid ${theme.colors.offwhite.calm};
  border-top-color: ${theme.colors.evergreen.dark};
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  pointer-events: none;
`;
