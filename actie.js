//kernmerken
var datumpje = new Date();
var uurtje = datumpje.getHours();
var zon = document.getElementById("zon");
var maan = document.getElementById("maan");

if(uurtje >= 6 && uurtje < 18){
	maan.classList.remove("block");
	zon.classList.remove("none");

	zon.classList.add("block");
	maan.classList.add("none");

}else{
	maan.classList.remove("none");
	zon.classList.remove("block");

	maan.classList.add("block");
	zon.classList.add("none");
	
}


const switchBtn = document.getElementById("twelveHourBtn");

let twelveHourBtn = document.getElementById("twelveHourBtn");
let getTime = document.getElementById("tijd");
let isTwelveHour = true;
let amPm = " AM";


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  let hours = "12";
  let today = new Date();
  let h = today.getHours();

  if (h > 20) {
    amPm = " N.M";
    
    
  } else {
    amPm = " V.M";
   
  }

  if (isTwelveHour) {
    hours = "24";
    if (h >= 12) {
      h = h - 12;
    }
  } else {
    hours = "12";
  }

 
  twelveHourBtn.innerHTML = hours + " uur klok";
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  getTime.innerHTML = h + ":" + m + ":" + s + amPm;
  t = setTimeout(function() {
    startTime();
  }, 500);
}

startTime();

switchBtn.addEventListener("click", function(e) {
  isTwelveHour = !isTwelveHour;
});


switch (new Date().getDay()) {
  case 0:
    document.querySelector(".zondag").classList.add("glow");
    break;
  case 1:
    document.querySelector(".maandag").classList.add("glow");
    break;
  case 2:
    document.querySelector(".dinsdag").classList.add("glow");
    break;
  case 3:
    document.querySelector(".woensdag").classList.add("glow");
    break;
  case 4:
    document.querySelector(".donderdag").classList.add("glow");
    break;
  case 5:
    document.querySelector(".vrijdag").classList.add("glow");
    break;
  case 6:
    document.querySelector(".zaterdag").classList.add("glow");
}


let month = document.querySelector(".maand");
let day = document.querySelector(".dag");
let year = document.querySelector(".jaar");
let date = new Date();

let months = [
  "Januari",
  "Februari",
  "Maart",
  "April",
  "Mei",
  "Junie",
  "Juli",
  "Augustus",
  "September",
  "Oktober",
  "November",
  "December"
];
month.innerHTML = months[date.getMonth()];
day.innerHTML = date.getDate();
year.innerHTML = date.getFullYear();





