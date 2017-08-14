const graphql = require('graphql')
const _ = require('lodash')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql

// fake data
const users = [
  { id: '23', firstName: 'Bill', age: 20 },
  { id: '47', firstName: 'Samantha', age: 21 },
]

// custom type for user
const UserType = new GraphQLObjectType({
  name: 'User',   // type name
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      // NOTE provide id as arg, you can find an user
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id })
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
