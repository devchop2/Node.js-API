import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as mailHandler from "../class01-nodejs/mailCreator.js";
import nodemailer from "nodemailer";

// The GraphQL schema
const typeDefs = `#graphql

  input UserInput{
    email : String
    name: String
  }
  type User{
    key : Int
    email : String
    name : String
  }
  type Query {
    fetchUser:[User]
  }

  type Mutation{
    createUser(user:UserInput):String
  }

`;

console.log(process.env.MAIL);
const fetchUser = () => {};
const createUser = (parent, args) => {
  let email = args.user.name;
  let name = args.user.name;

  let mailContent = mailHandler.getWelcomeTemplate(name, 12, "", new Date());

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "lhwlina1130@gmail.com",
      pass: "", //2차 비밀번호
    },
  });

  transporter.sendMail({
    from: process.env.MAIL,
    to: email,
    subject: "[인증메일]~~",
    html: mailContent,
  });
};
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchUser,
  },

  Mutation: {
    createUser,
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
