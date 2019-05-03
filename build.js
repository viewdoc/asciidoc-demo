const { buildMarkup } = require('@viewdoc/markup-demo')
const path = require('path')

const main = async () => {
  await buildMarkup({
    srcDirPath: path.join(__dirname, 'src'),
    outDirPath: __dirname,
    srcExtensions: ['.asc'],
    generateSrc: (markup) => {
      return [
        '----',
        markup,
        '----',
      ].join('')
    }
  })
}

if (require.main === module) {
  main()
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
