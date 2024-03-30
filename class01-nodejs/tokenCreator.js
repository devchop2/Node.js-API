export const createTokenOfPhone = (phoneNum) => {
  if (phoneNum.length < 10 || phoneNum.length > 11) {
    console.error("invalid request");
    return "";
  }

  let token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  console.log("complete create. token:" + token);
  return token;
};
