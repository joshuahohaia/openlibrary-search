import styled from "styled-components";
import { theme } from "@app/theme";

export const Section = styled.section`
  background-color: ${theme.colors.evergreen.light};
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Container = styled.div`
  max-width: ${theme.breakpoints.desktop};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.lg};
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.display};
  font-size: 2rem;
  color: ${theme.colors.evergreen.veryDark};
  margin: 0;
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: ${theme.colors.offwhite.vivid};
  max-width: 600px;
  line-height: 1.6;
`;

export const ErrorText = styled.div`
  color: ${theme.colors.evergreen.veryDark};
  font-weight: bold;
  margin-top: ${theme.spacing.sm};
`;
