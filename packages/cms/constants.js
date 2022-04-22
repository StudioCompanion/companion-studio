export const LOCKED_DOCUMENT_TYPES = ['homepage', 'settings']

const DOCUMENT_TYPES = []

export const REFERENCED_DOCUMENTS = [
  ...[...LOCKED_DOCUMENT_TYPES, ...DOCUMENT_TYPES].map((type) => ({
    type,
  })),
]

export const PREVIEWABLE_DOCUMENT_TYPES = [
  /**
   * Singles
   */
  ...LOCKED_DOCUMENT_TYPES,
  /**
   * Documents
   */
]
