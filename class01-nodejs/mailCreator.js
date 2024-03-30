export const getWelcomeTemplate = ({ name, age, school, joinDate }) => {
  let result = `
      <html>
          <body>
              <h1>철수님 가입을 환영합니다.</h1>
              <hr />
              <div>이름 : ${name}</div>
              <div>나이 : ${age}</div>
              <div>학교 : ${school}</div>
              <div>가입일 : ${joinDate}</div>
          </body>
      </html>
      `;

  console.log(result);
  return result;
};
