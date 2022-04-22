export default (schema) => {
  schema.fields.push({
    name: 'image',
    title: 'Meta image',
    type: 'image',
  })
  return schema
}
