import { breakpoints } from '@/styles/breakpoints'

export const theme = {
  colors: {
    evergreen: {
      light: '#ECFFC7',
      calm: '#CEF5A4',
      vivid: '#ADEE68',
      dark: '#36893B',
      veryDark: '#154618',
    },
    offwhite: {
      light: '#FDF8F2',
      calm: '#EAE0D7',
      vivid: '#9A9288',
    },
    neutral: {
      dark: '#32373c',
      medium: '#545a60',
      light: '#6c757d',
    },
    surface: '#FFFFFF',
    fade: '#E3E3E3'
  },
  fonts: {
    display: "'Fraunces', Georgia, serif",
    body: "'Source Serif 4', Georgia, serif",
  },
  breakpoints: {
    mobile: `${breakpoints.mobile}px`,
    tablet: `${breakpoints.tablet}px`,
    desktop: `${breakpoints.desktop}px`,
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
    controlY: '9px',
    controlX: '12px',
  },
  radii: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    pill: '9999px',
  },
  shadows: {
    sm: '0 1px 2px rgba(21, 70, 24, 0.05)',
    md: '0 4px 12px rgba(21, 70, 24, 0.1)',
    lg: '0 8px 24px rgba(21, 70, 24, 0.12)',
  },
  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
  },
} as const

export type Theme = typeof theme
