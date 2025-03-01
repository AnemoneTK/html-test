// const username = admin;
// const password = admin1234;

const checkUser = (username, password) => {
  if (username === "" || password === "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (username != "admin" || password != "admin1234") {
    alert("ข้อมูลไม่ถูกต้อง");
  } else {
    alert("เข้าสู่ระบบ!!");
  }
};
const login = () => {
  const username_input = document.getElementById("username").value;
  const password_input = document.getElementById("password").value;
  console.log("Username " + username_input);
  console.log("Password " + password_input);

  checkUser(username_input, password_input);
};
