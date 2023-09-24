
const buttons = document.querySelectorAll(".accordion");
const pannels = document.querySelectorAll(".pannel");

buttons.forEach((button) => {
   button.addEventListener("click", () => {
      button.classList.toggle("active");
      button.nextElementSibling.classList.toggle("active");
   });
});

for (let i = 0; i < buttons.length; i++) {
   buttons[i].addEventListener("click", function() {
      this.parentElement.classList.toggle("active");
      
      var pannel = this.nextElementSibling;
      if (pannel.style.display === "block") {
         pannel.style.display = "none";
      } else {
         pannel.style.display = "block";
      }
   });
}

