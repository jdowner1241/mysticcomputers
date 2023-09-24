function validateForm() {
    var email = document.forms["fcf-form-id"]["Email"].value;
    var topic = document.forms["fcf-form-id"]["topic"].value;
    var message = document.forms["fcf-form-id"]["Message"].value;
    
    // check if email is valid
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    
    // check if topic and message are not empty
    if (topic == "" || message == "") {
      alert("Please fill out all required fields.");
      return false;
    }
    
    // if all checks pass, submit the form
    alert("Submitted successfully");
    return true;
  }