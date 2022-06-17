document.getElementById("popup-1")
    .classList.toggle("active");
   

   function signup(e) {
       e.preventDefault();
       let users_fname = document.getElementById("users_fname");
       let fname = users_fname.value;
       let users_lname = document.getElementById("users_lname");
       let lname = users_lname.value;
       let users_email = document.getElementById("users_email");
       let email = users_email.value;
       let users_password = document.getElementById("users_password");
       let password = users_password.value;
       let users_num = document.getElementById("users_num");
       let number = users_num.value;

       if(localStorage.getItem('users') === null) {
           localStorage.setItem('users', JSON.stringify([]));
       }

       let puser = {
           fname,
           lname,
           email,
           password,
           number
       }

       let error_p = document.getElementById('show-error');
       console.log(error_p);
       error_p.style.color = 'red';
       error_p.style.margin = '0px';
       error_p.style.textAlign = 'left';
       error_p.style.marginLeft = '25px';

       
       let arr = JSON.parse(localStorage.getItem("users"));
       console.log(arr);
       let found = 1;

       if(number.length === 10){
            arr.forEach(function(el){
                if(el.email === puser.email){
                    found = 0;
                    error_p.innerText = '* User already exist with this email address'
                }
                else if(el.number === puser.number ){
                    found = 0;
                    error_p.innerText = '* User already exist with this Number'
                }
            })

            if(found){
                arr.push(puser);
                localStorage.setItem('fname', JSON.stringify(puser.fname));
                error_p.style.color = 'green';
                error_p.innerText = '* Valid Credentials'
                setTimeout(function(){
                 window.location.href = 'signin.html';
              }, 500);
              
            } 
       }
       else{
           error_p.innerText = `* Please Enter a valid Number`;
       }
       
      
       localStorage.setItem("users", JSON.stringify(arr));

      
   }