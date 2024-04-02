//yarn init
//yarn add axios

import axios from "axios";
import cheerio from "cheerio";

const createMessage = async () => {
  const url = "https://www.naver.com";

  // axios.get으로 요청해서 html 코드 받아오기
  const result = await axios.get(url);
  //console.log(result.data);

  // scraping 결과에서  og(오픈그래프) 코드를 골라내서 변수에 담기. => cherrio 의 도움을 받아야함.
  const $ = cheerio.load(result.data);
  $("meta").each((index, el) => {
    //모든 행들에 대해, property 속성이 있고 그 속성안에 og가 있는지
    if ($(el).attr("property") && $(el).attr("property").includes("og:")) {
      const key = $(el).attr("property"); //og:title og:description
      const value = $(el).attr("content"); //contents
      console.log(key, value);
    }
  });
};

createMessage();
