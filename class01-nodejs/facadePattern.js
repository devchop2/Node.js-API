const createTokenOfPhone = (phoneNum) => {
  let isValid = isValidPhoneNumber(phoneNum);
  if (isValid) return;

  let token = getToken();
  sendToSMS(token);
};

createTokenOfPhone("010123456");

const isValidPhoneNumber = (phoneNum) => {
  if (phoneNum.length < 10 || phoneNum.length > 11) {
    console.error("invalid request");
    return false;
  }
  return true;
};

const getToken = () => {
  let token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  return token;
};

const sendToSMS = (token) => {
  console.log("complete create. token:" + token);
};
