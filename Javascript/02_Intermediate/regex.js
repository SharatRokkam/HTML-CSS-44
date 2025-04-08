// Regular Expression
// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

// const regex = /javascript/g

// const text =
//   "Hello, I am learning javascript and javascript is tough to learn for me, coz I cannot understand javascript.";

// const result = text.replace(regex, "java");

// console.log(result);

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("#email").value.trim();
  console.log(email);
  const password = document.querySelector("#password").value.trim();
  console.log(password);
  const error = document.querySelector("#error");

  // validation for email and password
  const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (emailRegex.test(email)) {
    if (passwordRegex.test(password)) {
      console.log("password is correct");
    } else {
      console.log("password incorrect");
    }
    // console.log(!emailRegex.test(email))
    console.log("Email is correct");
  } else {
    error.textContent = "Please enter valid email";
    return;
  }

  // if (!passwordRegex.test(password)) {
  //   error.textContent = "Password should be at least 8 characters";
  //   return;
  // }

  error.textContent = "";
  alert("Login Successful");
});
