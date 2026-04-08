var weddingDate = new Date("Dec 25, 2026 19:00:00").getTime();

var x = setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance / (1000*60*60*24));

document.getElementById("timer").innerHTML =
days + " Days Left";

},1000);