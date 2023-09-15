
const valueOfSec = document.getElementById('sec');
const valueOfMin = document.getElementById('min');
const valueOfHour = document.getElementById('hour');
const valueOfDay = document.getElementById('day');
const bigSecTimer = document.getElementById('bigSecTimer');
const rotImg = document.getElementById('rotImg');

const giftBox = document.getElementById('down-box');
const otherBox = document.getElementById('other-box');
const counterBox = document.getElementById('count-box');

let countDownDate = new Date("Sept 15, 2023 18:50:00").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();
    
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        if (distance > 19000){
            valueOfSec.innerHTML = `${seconds} <br> ${seconds<2 ? " Second " : " Seconds "}`;
            valueOfMin.innerHTML = `${minutes} <br> ${minutes<2 ? " Minute " : " Minutes "}`;
            valueOfHour.innerHTML = `${hours} <br> ${hours<2 ? " Hour " : " Hours "}`;
            valueOfDay.innerHTML = `${days} <br> ${days<2 ? " Day " : " Days "}`;
        } else {
            clearInterval(x);
            counterBox.style.display = "none" ;
            otherBox.style.display = "none" ;
            bigSecTimer.style.display = "block" ;
            rotImg.style.display = "block" ;
            countDown();
        }
}, 10);
//Last 30 second time counter
let timer = 20;
function countDown(){
    setTimeout(function() {
       timer--;
       bigSecTimer.innerHTML =""+timer;
       if (timer>0) {
            countDown();
       } else {
            giftBox.style.display = "block" ;
            bigSecTimer.style.display = "none";
       }
    }, 1000);
}

