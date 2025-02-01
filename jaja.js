let sign = prompt("?");

if (sign.toLowerCase() === "привет") {
  alert("Привет!");
}

sign = window.prompt(); 
sign = prompt(); 
sign = window.prompt("Этот сайт был вам полезен?", "Да"); 
sign = window.prompt("Ваше имя?"); 
sign = window.prompt("Ваше имя.", "Имя"); 


window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("demo").innerHTML = "Привет, " + sign + "!";
});
