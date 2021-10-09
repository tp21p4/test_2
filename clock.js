const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

console.log(clockTitle)
// console.log(clockContainer.querySelector("div"))

function getTime(){
    const date = new Date();
    // Hour:date.getHours();
    // Minutes:date.getMinutes()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const senconds = date.getSeconds();

        clockTitle.innerText = `${
            hours < 10 ? `0${hours}`:hours}:${
            minutes< 10 ? `0${minutes}`:minutes}:${
            senconds <10 ? `0${senconds}`:senconds}`;
}

let timer = null

function startTime(){
    getTime()
    timer = setInterval(getTime,500)
}

function stopTime(){
    if(timer != null){
        clearInterval(timer)
    }
}

function init(){
    startTime()
}

init();