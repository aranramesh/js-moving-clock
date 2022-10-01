setInterval(setClock,1000);

const hourhand = document.querySelector('[data-hour-hand]')
const minuteshand = document.querySelector('[data-minutes-hand]')
const secondhand = document.querySelector('[data-seconds-hand]')

function setClock(){
    const currentdate =new Date();
    const secondsratio = currentdate.getSeconds() / 60;
    const minutessratio = secondsratio + currentdate.getMinutes() / 60;
    const hoursratio =  minutessratio + currentdate.getHours() / 12;

    setrotation(secondhand,secondsratio);
    setrotation(minuteshand,minutessratio);
    setrotation(hourhand,hoursratio);
}


function setrotation(element ,rotationRatio ){
    element.style.setProperty('--rotation', rotationRatio *360)
}