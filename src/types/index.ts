export interface BookResult {
  id: string
  key: string
  title: string
  subtitle: string | null
  author: string
  authorKey: string | null
  year: number | null
  coverUrl: string
  coverLargeUrl: string
  isbn: string | null
  editionCount: number
  languages: string[]
  hasFulltext: boolean
  ebookAccess: string
  publishers: string[]
  publishPlaces: string[]
  subjects: string[]
}

export type BreakpointKey = 'mobile' | 'tablet' | 'desktop'

export type SpacingKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'