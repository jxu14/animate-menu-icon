
let button1 = document.querySelector("#button1");
button1.addEventListener("click", function() {
  button1.classList.add("Button_Clicked");
})

let circle2 = document.querySelector("#circle2");
circle2.addEventListener("animationend", function() {
  button1.classList.remove("Button_Clicked");
})