document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document
  .querySelector(".popup .close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

//---------------------------------------------------------------------------------------

// login - validation

function Login(e) {
  e.preventDefault();

  let form = document.getElementById("login-form");

  let user_data = {
    username: form.user.value,
    password: form.pass.value,
  };

  // console.log(user_data.username);

  let data_to_send = JSON.stringify(user_data);
  console.log("data", data_to_send);

  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",

    body: data_to_send,

    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })

    .then((res) => {
      // console.log(res);
      console.log(res.token);

      fetchmyData(user_data.username, res.token);
    })
    .catch((err) => {
      console.log(error);
    });
}

function fetchmyData(username, token) {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
