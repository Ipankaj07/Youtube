document.querySelector("#show-signup").addEventListener("click", function () {
  document.querySelector(".popup1").classList.add("active");
});

document
  .querySelector(".popup1 .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup1").classList.remove("active");
  });

//----------------------------------------------------------------------------

// name, email, username, mobile, description

function Signup(e) {
  e.preventDefault();

  let form = document.getElementById("signup-form");

  let user_data = {
    name: form.name.value,
    email: form.email.value,
    password: form.password.value,
    username: form.username.value,
    mobile: form.mobile.value,
    description: form.description.value,
  };

  // console.log(user_data);

  user_data = JSON.stringify(user_data);

  // console.log(user_data);

  // "https://masai-api-mocker.herokuapp.com/auth/register"

  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",

    body: user_data,

    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res.error);
      sus(res.error);
    })
    .catch((err) => {
      console.log(err);
    });
}

let confSignup = document.getElementById("conf-signup");

function sus(data) {
  confSignup.innerHTML = null;

  // console.log(data.name);

  if (data != true) {
    let text = document.createElement("p");
    text.innerText = "Registration Success";
    text.style.textAlign = "center";
    text.style.color = "green";
    
    confSignup.append(text);
  }else{
    let text1 = document.createElement("p");
    text1.innerText = "Registration failed, user already exists";
    text1.style.textAlign = "center";
    text1.style.color = "red";

    confSignup.append(text1);
  }
}

