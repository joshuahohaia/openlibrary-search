import styled from "styled-components";
import { theme } from "@app/theme";
import { media, flexBetween } from "@/styles";
import { HEADER } from "@/constants";

export const Wrapper = styled.header`
  height: ${HEADER.HEIGHT}px;
  background: ${theme.colors.surface};
  border-bottom: 1px solid ${theme.colors.offwhite.calm};
  ${flexBetween}
  padding: 0 ${theme.spacing.controlX};
  position: sticky;
  top: 0;
  z-index: 1100;

  ${media.mobile} {
    padding: 0 ${theme.spacing.md};
  }
`;

export const Logo = styled.a`
  font-family: ${theme.fonts.display};
  font-size: 1.75rem;
  font-weight: 600;
  color: ${theme.colors.evergreen.veryDark};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  svg {
    width: 26px;
    height: 26px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
`;
