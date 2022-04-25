export default {
  schemaPath: './schemas/schema.js',
  outputPath: '../web/src/types/sanity.generated.ts',
  babelOptions: {
    ignore: [], // <-- this resets the ignore option (but makes codegen super slow)
  },
}
