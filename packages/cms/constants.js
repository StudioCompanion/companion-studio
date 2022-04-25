export const LOCKED_DOCUMENT_TYPES = ['homepage', 'teampage', 'approachpage']

const DOCUMENT_TYPES = ['project']

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
  ...DOCUMENT_TYPES,
]
