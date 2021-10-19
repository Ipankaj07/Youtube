document.querySelector('#show-signup').addEventListener('click', function () {
    document.querySelector('.popup1').classList.add('active');
})

document.querySelector('.popup1 .close-btn').addEventListener('click', function () {
    document.querySelector('.popup1').classList.remove('active');
})

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
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
