import { css } from 'styled-components'
import { theme } from '@app/theme'

export const truncate = (lines = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  ${lines === 1
    ? css`white-space: nowrap;`
    : css`
        display: -webkit-box;
        -webkit-line-clamp: ${lines};
        -webkit-box-orient: vertical;
      `}
`

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${theme.colors.evergreen.vivid};
    outline-offset: 2px;
  }
`

export const hideScrollbar = css`
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const absoluteFill = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const controlPadding = css`
  padding: ${theme.spacing.controlY} ${theme.spacing.controlX};
`
