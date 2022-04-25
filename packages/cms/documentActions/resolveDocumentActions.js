// import the default document actions
import defaultResolve, {
  PublishAction,
  DiscardChangesAction,
} from 'part:@sanity/base/document-actions'

import preview from './preview'

import { LOCKED_DOCUMENT_TYPES } from '../constants'

const lockedDocs = [...LOCKED_DOCUMENT_TYPES]

const getDefaults = (props) => {
  const { type } = props

  if (lockedDocs.includes(type)) {
    return defaultResolve(props).filter(
      (action) => action === PublishAction || action === DiscardChangesAction
    )
  }

  return defaultResolve(props)
}

export default function resolveDocumentActions(props) {
  return [
    // Start with Sanity's default actions:
    ...getDefaults(props),
    // And add our custom actions
    preview,
  ]
}
