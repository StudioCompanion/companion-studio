export default {
  name: 'settings',
  title: 'Global Site Settings',
  type: 'document',
  groups: [
    {
      name: 'meta',
      title: 'Default meta',
    },
    {
      name: 'redirects',
      title: 'Redirects',
    },
  ],
  fields: [
    {
      name: 'meta',
      title: 'Default meta',
      type: 'meta',
      group: 'meta',
    },
    {
      name: 'redirects',
      title: 'Redirects',
      group: 'redirects',
      type: 'redirects',
    },
  ],
}
