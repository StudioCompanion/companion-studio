import S from '@sanity/desk-tool/structure-builder'
import { House, Wrench, UsersThree } from 'phosphor-react'

export default () =>
  S.list()
    .title('Menu')
    .items([
      S.listItem()
        .title('Home')
        .icon(House)
        .child(
          S.editor()
            .title('Home')
            .id('homepage')
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.divider(),
      S.listItem()
        .title('Team Members')
        .icon(UsersThree)
        .child(S.documentTypeList('teamMember')),
      S.divider(),
      S.listItem()
        .title('Settings')
        .icon(Wrench)
        .child(
          S.editor()
            .title('Settings')
            .id('settings')
            .schemaType('settings')
            .documentId('settings')
        ),
    ])
