export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'teamMember' }],
    },
  ],
}
