const express = require('express');
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require('mongoose');
const cors =require('cors');

const app = express();
const port = process.env.PORT || 4000;

//allow cross-origin requests
app.use(cors());
mongoose.connect('mongodb+srv://anusha:test123@gql-ninja-lqitt.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.once('open', ()=>{
  console.log("connected to database")
})
app.use('/graphql',graphqlHTTP({schema, graphiql:true}));
app.listen(port,()=>{
  console.log("now listening for requests on port 4000");
})
  
