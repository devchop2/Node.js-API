// first, you need to execute class02-express/indexedDB.js program

const OnClickVerify = () => {
  let phone = document.getElementById("input-phone").value;

  console.log("num:" + phone);
  axios.post("http://localhost:3000/tokens/phone", { phone }).then((res) => {
    console.log("response " + res.data);
    let textField = document.getElementById("text-auth");
    textField.innerText = res.data;
  });
};
