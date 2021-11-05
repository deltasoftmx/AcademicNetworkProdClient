//Load variables
const path =  require('path')
let envpath = path.join(__dirname, '..', 'etc', '.env')
let result = require('dotenv').config({ path: envpath })
if (result.error) {
  console.error(".env file not found")
  console.error(result.error.message)
  process.exit(1)
}

const app = require('./app')

app.listen(process.env.PORT, () => {
  console.log('-----------------------------------')
  console.log(`App running on port: ${process.env.PORT}`)
  console.log('-----------------------------------')
})
