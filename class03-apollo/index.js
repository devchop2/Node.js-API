// yarn add @apollo/server
//yarn add graphql

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// The GraphQL schema
const typeDefs = `#graphql

  input BoardInput{
    writer: String
    title : String
    contents : String
  }
  type Board{
    number : Int
    writer : String
    title : String
    contents: String
  }
  type Query {
    fetchBoard:[Board]
  }

  type Mutation{
    createBoard(createBoardInput:BoardInput):String
  }

`;

const fetchBoard = (parent, args, context, info) => {
  const result = [
    { number: 1, writer: "철수", title: "철수최고", contents: "내용 철수" },
    { number: 2, writer: "유리", title: "유리최고", contents: "내용 유리" },
    { number: 3, writer: "짱구", title: "짱구최고", contents: "내용 짱구" },
  ];
  return result;
};

const createBoard = (parent, args, context, info) => {
  let number = args.createBoardInput.contents;
  console.log("input:" + number);
  return "생성";
};

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoard,
  },

  Mutation: {
    createBoard,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true, //모든 사이트를 허용하고 싶을 때
  //cors: {origin:"https://naver.com"} 특정사이트만 지정하고 싶을때.
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);
