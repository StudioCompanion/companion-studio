import S from '@sanity/desk-tool/structure-builder'

import { FiHome } from 'react-icons/fi'
import { VscBeaker } from 'react-icons/vsc'
import { RiTeamLine } from 'react-icons/ri'
import { GoProject } from 'react-icons/go'
import {
  MdSettingsSuggest,
  MdArrowCircleDown,
  MdOutlineReportProblem,
} from 'react-icons/md'
import { FaRegCompass } from 'react-icons/fa'

export default () =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(FiHome)
        .child(S.editor().schemaType('homepage').documentId('homepage')),
      S.divider(),
      S.listItem()
        .title('Work')
        .icon(GoProject)
        .child(S.documentTypeList('project')),
      S.listItem()
        .title('Approach')
        .icon(VscBeaker)
        .child(S.editor().schemaType('approach').documentId('approach')),
      S.listItem()
        .title('Team')
        .icon(RiTeamLine)
        .child(S.documentTypeList('teamMember')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(MdSettingsSuggest)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Navigation')
                .icon(FaRegCompass)
                .schemaType('navigation')
                .child(S.documentTypeList('navigation')),
              S.listItem()
                .title('Footer')
                .icon(MdArrowCircleDown)
                .schemaType('footer')
                .child(S.documentTypeList('footer')),
              S.divider(),
              S.listItem()
                .title('404')
                .icon(MdOutlineReportProblem)
                .schemaType('error')
                .child(S.documentTypeList('error')),
            ])
        ),
    ])
