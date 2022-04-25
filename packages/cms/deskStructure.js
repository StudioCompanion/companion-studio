import S from '@sanity/desk-tool/structure-builder'
import {
  House,
  Files,
  Wrench,
  Handshake,
  UsersThree,
  UserList,
} from 'phosphor-react'

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
      S.listItem()
        .title('Team')
        .icon(UsersThree)
        .child(
          S.editor()
            .title('Team')
            .id('teampage')
            .schemaType('teampage')
            .documentId('teampage')
        ),
      S.listItem()
        .title('Approach')
        .icon(Handshake)
        .child(
          S.editor()
            .title('Approach')
            .id('approachpage')
            .schemaType('approachpage')
            .documentId('approachpage')
        ),
      S.divider(),
      S.listItem()
        .title('Projects')
        .icon(Files)
        .child(S.documentTypeList('project')),
      S.divider(),
      S.listItem()
        .title('Team Members')
        .icon(UserList)
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
