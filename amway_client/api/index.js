var express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
var { buildSchema } = require("graphql");
var { getProducts, addProduct } = require("./data/products");

var cors = require("cors");

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Product {
    id: Int,
    name: String,
    GuestPrice: String,
    OrderingNumber: String,
    Url: String
  },
  type Query {
    hello: String,
    products: [Product],
    product(id: Int!): Product,
  },
  type Mutation {
    createProduct(name: String!, description: String!): String,
  }
`);


// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
  products: () => {
    return getProducts();
  },
  product: ({ id }) => {
    const products = getProducts();
    return products.find(p => p.id === id);
  },
  createProduct: args => {
    const { name, description } = args;
    const newProduct = addProduct(name, description);
    return `Created: ${newProduct.id} ${newProduct.name} - ${
      newProduct.description
    }`;
  },
};

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");

// query with list CHECK
// query with param, CHECK
// mutator, CREATE, DELETE, UPDATE , CHECK

// correct broken images on NGRX