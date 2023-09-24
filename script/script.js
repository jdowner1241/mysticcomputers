// var acc = document.getElementsByClassName
//               ("accordion");
//                var i;

//                for (i =0; i < acc.length; i++) {
//                acc[i].addEventListener("Click", function
//                (){

//                this.classList.toggle("active");
//                this.parentElement.classList.toggle("active");

//                 var pannel = this.nextElementSibling;

//                  if (pannel.style.display === "block") {
//                  pannel.style.display = "none";
//                 }else{
//                  pannel.style.display = "block";
//               }
//          });
//         }
         // script for signin popup   
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))         
        
        function toggleSignIn() {
         var signinForm = document.getElementById("signin-form");
         if (signinForm.style.display === "block") {
           signinForm.style.display = "none";
         } else {
           signinForm.style.display = "block";
         }
       }

       function togglenotification() {
         var notificationForm = document.getElementById("notification-form");
         if (notificationForm.style.display === "block") {
            notificationForm.style.display = "none";
         } else {
            notificationForm.style.display = "block";
         }
       }

       function signIn() {
         // Assuming the email and password inputs have the IDs "email" and "password"
         const email = document.getElementById("email").value;
         const password = document.getElementById("password").value;
       
         // Perform any necessary validation on the email and password inputs here
         
         // If validation passes, show a success message
         alert(`Successfully signed in as ${email}!`);
       }