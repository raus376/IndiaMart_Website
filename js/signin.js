document.getElementById("popup-2")
.classList.toggle("active"); 

function signin(e) {

  e.preventDefault();

  let users_email = document.getElementById("users_email");
  let email = users_email.value;
  let users_password = document.getElementById("users_password");
  let password = users_password.value;
  let users_num = document.getElementById("users_num");

  let arr = JSON.parse(localStorage.getItem("users"));

    let found = 1;
    arr.forEach(function(el) {
    if(email === el.email  &&  password === el.password) {
      found = 0;
      window.location.href = '../index.html';
    }
    
  });

  if(found){
    alert('Invalid password')
  }
  
}