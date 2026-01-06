import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --color-primary: ${theme.colors.evergreen.dark};
    --color-primary-light: ${theme.colors.evergreen.light};
    --color-primary-vivid: ${theme.colors.evergreen.vivid};
    --color-text: ${theme.colors.neutral.dark};
    --color-text-muted: ${theme.colors.neutral.light};
    --color-background: ${theme.colors.offwhite.light};
    --color-surface: ${theme.colors.surface};
    --font-display: ${theme.fonts.display};
    --font-body: ${theme.fonts.body};
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: var(--font-body);
    color: var(--color-text);
    background-color: var(--color-background);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 500;
    line-height: 1.2;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: var(--font-body);
  }

  ::selection {
    background-color: ${theme.colors.evergreen.calm};
    color: ${theme.colors.evergreen.veryDark};
  }

  :focus-visible {
    outline: 2px solid var(--color-primary-vivid);
    outline-offset: 2px;
  }
`

export default GlobalStyles
