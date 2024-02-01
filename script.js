let header = document.getElementById("header");

let wagon = document.getElementById("g-wagon");
let audi = document.getElementById("audi");
let supra = document.getElementById("supra");
let model = document.getElementById("model");
let mph = document.getElementById("mph");
let speed = document.getElementById("speed");
let range = document.getElementById("range");

wagon.onclick=function(){
    header.style.backgroundImage="url(g-wagon.jpg)";
    model.innerHTML="G-WAGON";
    mph.innerHTML="1.5s";
    speed.innerHTML = "300mph";
    range.innerHTML = "400mi"
}
audi.onclick=function(){
    header.style.backgroundImage="url(audi.jpg)";
    
    model.innerHTML="AUDI";
    mph.innerHTML="1.7s";
    speed.innerHTML="400mph";
    range.innerHTML="500mi"
}

supra.onclick=function(){
    header.style.backgroundImage="url(supraaa.jpg)";
    model.innerHTML="SUPRA";
    mph.innerHTML="2.0";
    speed.innerHTML="500mph";
    range.innerHTML="550mi";
}