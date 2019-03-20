const concurrently = require('concurrently')

const args = process.argv.slice(2).join(' ')
console.log(args)
concurrently(
  [
    { command: 'npm run parcel-js', prefixColor: 'blue', name: 'js' },
    { command: 'node-sass ./styles/theme.scss ./assets/main.css -w', prefixColor: 'blue', name: 'scss' },
    { command: 'theme watch ' + args, prefixColor: 'magenta', name: 'theme' }
  ],
  {
    killOthers: ['failure', 'success']
  }
)
