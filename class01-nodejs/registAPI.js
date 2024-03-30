import { getWelcomeTemplate } from "./mailCreator.js";

const createUser = (user) => {
  let isValid = isValidMail(user.mail);
  if (!isValid) return;

  let html = getWelcomeTemplate(user);
  sendToSMS(html);
};

const isValidMail = (mail) => {
  if (mail === undefined || !mail.includes("@")) {
    console.log("invalid email");
    return false;
  }
  return true;
};

const sendToSMS = (html) => {
  console.log(html);
};

createUser({
  mail: "lll@naver.com",
  name: "철수",
  age: 8,
  school: "대램쥐초등학교",
  joinDate: "2024-03-29",
});
