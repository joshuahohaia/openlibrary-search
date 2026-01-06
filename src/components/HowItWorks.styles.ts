import styled from "styled-components";
import { theme } from "@app/theme";
import { media } from "@/styles";

export const Section = styled.section`
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  background: ${theme.colors.surface};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing.xxl};
`;

export const SectionTitle = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: ${theme.colors.evergreen.veryDark};
  margin: 0 0 ${theme.spacing.sm};
`;

export const SectionSubtitle = styled.p`
  font-size: 1.0625rem;
  color: ${theme.colors.offwhite.vivid};
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.5;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};

  ${media.mobile} {
    gap: ${theme.spacing.md};
  }
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: ${theme.radii.pill};
  background: ${theme.colors.neutral.dark};
  color: ${theme.colors.surface};
  font-family: ${theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    width: 32px;
    height: 32px;
    min-width: 32px;
    font-size: 0.9375rem;
  }
`;

export const StepContent = styled.div`
  flex: 1;
  padding-top: 6px;
`;

export const StepTitle = styled.h3`
  font-family: ${theme.fonts.display};
  font-size: 1.125rem;
  color: ${theme.colors.evergreen.veryDark};
  margin: 0 0 ${theme.spacing.xs};
`;

export const StepDescription = styled.p`
  font-size: 0.9375rem;
  color: ${theme.colors.offwhite.vivid};
  line-height: 1.5;
  margin: 0;
`;

export const Connector = styled.div`
  width: 2px;
  height: 24px;
  background: ${theme.colors.offwhite.calm};
  margin-left: 19px;

  ${media.mobile} {
    margin-left: 15px;
    height: 16px;
  }
`;
