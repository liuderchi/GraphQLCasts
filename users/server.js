const express = require('express')
const expressGraphQl = require('express-graphql')

const PORT = 4000
const app = express()

app.use('/graphql', expressGraphQl({
  graphiql: true,
}))

app.listen(PORT, () => {
  console.log(`listening ${PORT}`)
})
