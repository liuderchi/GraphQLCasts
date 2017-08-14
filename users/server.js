const express = require('express')
const expressGraphQl = require('express-graphql')

const schema = require('./schema/schema')

const PORT = 4000
const app = express()

app.use('/graphql', expressGraphQl({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`listening ${PORT}`)
})
