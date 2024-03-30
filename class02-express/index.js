import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";
import cors from "cors"; //yarn add cors

//import { createTokenOfPhone } from "../class01-nodejs/tokenCreator.js";
import * as tokenCreator from "../class01-nodejs/tokenCreator.js";

const app = express();
app.use(express.json());

app.use(cors()); // use cors

const swaggerSpec = swaggerJsdoc(options); //swagger-UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));

app.get("/boards", function (req, res) {
  //db에 접속후 data 조회 , 조회했다고 가정하고
  //db에서 꺼내온 결과를 브라우저에 응답으로 주기

  const result = [
    { number: 1, writer: "철수", title: "철수최고", contents: "내용 철수" },
    { number: 2, writer: "유리", title: "유리최고", contents: "내용 유리" },
    { number: 3, writer: "짱구", title: "짱구최고", contents: "내용 짱구" },
  ];
  res.send(result);
});

app.post("/boards", function (req, res) {
  //브라우저에서 보낸 데이터 확인
  //console.log(req);
  console.log("=====");
  console.log(req.body);

  //db에 접속 후 data 저장 => 저장했다고 가정하고
  //저장된 결과를 브라우저에 응답주기
  res.send("등록 성공.");
});

app.post("/tokens/phone", function (req, res) {
  console.log("aa");
  console.log(req.body.phone);
  let token = tokenCreator.createTokenOfPhone(req.body.phone);
  console.log(token);
  if (token == "") res.send("err");
  else res.send("complete");
});

app.listen(3000);
