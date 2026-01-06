import styled from "styled-components";
import { theme } from "@app/theme";

export const Wrapper = styled.section`
  text-align: center;
`;

export const Headline = styled.h1`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${theme.colors.evergreen.veryDark};
  margin-bottom: ${theme.spacing.md};
  letter-spacing: -0.02em;
`;

export const Subtext = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${theme.colors.offwhite.vivid};
  line-height: 1.6;
`;

export const Hint = styled.p`
  margin-top: ${theme.spacing.xl};
  font-size: 0.875rem;
  color: ${theme.colors.offwhite.vivid};
  opacity: 0.8;
`;

export const Kbd = styled.kbd`
  display: inline-block;
  padding: 2px 6px;
  font-family: inherit;
  font-size: 0.75rem;
  background: ${theme.colors.offwhite.calm};
  border-radius: ${theme.radii.xs};
  border: 1px solid ${theme.colors.offwhite.vivid};
  color: ${theme.colors.evergreen.veryDark};
`;