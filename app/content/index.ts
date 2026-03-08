import { generalContent } from './verticals/general'
import { mockContent } from './verticals/mock'
import { VerticalContent } from './types'

const VERTICALS: Record<string, VerticalContent> = {
  general: generalContent,
  mock: mockContent,
  // Future verticals:
  // medico: medicoContent,
  // arquitecto: arquitectoContent,
  // restaurante: restauranteContent,
}

export function getVerticalContent(vertical: string): VerticalContent {
  const content = VERTICALS[vertical]

  if (!content) {
    console.warn(`Vertical "${vertical}" not found, falling back to general`)
    return VERTICALS.general
  }

  return content
}

export const AVAILABLE_VERTICALS = Object.keys(VERTICALS)
