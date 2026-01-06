import styled from "styled-components";
import { theme } from "@app/theme";

export const Wrapper = styled.section`
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.offwhite.calm};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  color: ${theme.colors.neutral.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${theme.spacing.sm};

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1rem;
  color: ${theme.colors.evergreen.veryDark};
  margin-bottom: ${theme.spacing.xs};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${theme.colors.offwhite.vivid};
  line-height: 1.5;
`;