const handHour = document.querySelector("#hour");
const handMin = document.querySelector("#minutes");
const handSec = document.querySelector("#seconds");


function getSecondsSinceStartOfDay() {      //no entendi la funcion que daban wn la actividad entonces la modifiqué para tener clara la conversion de segundos y horas y para manejarlos individual
    const day = new Date(); 

    var seconds = day.getSeconds();
    var secondsHand = ((seconds/60)*360) + 180;
    handSec.style.transform = `rotate(${secondsHand}deg)`;           //inclui esto ${} que aprendimos en los APIS para agregar la rotacion a la propiedad de css 

    var minutes = day.getMinutes();
    var minutesHand = ((minutes/60)*360) + ((seconds/60)*6) + 180;
    handMin.style.transform = `rotate(${minutesHand}deg)`;

    var hours = day.getHours();
    var hourshand = ((hours/12)*360) + ((minutes/60)*30) + 180;
    handHour.style.transform = `rotate(${hourshand}deg)`;
}

setInterval(getSecondsSinceStartOfDay, 1000);   //preferi dejar la funcion afuera porque meter dos funciones en una me confundió
