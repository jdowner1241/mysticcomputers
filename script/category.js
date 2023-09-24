

const button = document.querySelectorAll(".button")
   button.forEach((button)=>{
    button.addEventListener("click",(url)=>{
        var newTab = window.open();
  newTab.document.write("<html><head><title>New Tab</title></head><body><h1>Your HTML content goes here</h1></body></html>");
  newTab.document.close(url);
  newTab.focus();
    })
   })

function getInfo(){
   fetch("script/project.json")
   .then((response) => (response.json))
   .then(data => console.log(data)) 
}

getInfo();