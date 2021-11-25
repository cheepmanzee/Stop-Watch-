let seconds = 00;
let tens = 00;
let minutes = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMinutes = document.querySelector('.minutes');
const start = document.querySelector('.start'),
      stop = document.querySelector('.stop'),
      reset = document.querySelector('.reset');
let interval;

start.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(startTimer,10);
})

stop.addEventListener('click', () => {
   clearInterval(interval);
})

reset.addEventListener('click', () => {
   clearInterval(interval);
   getMinutes.innerHTML = '00';
   getSeconds.innerHTML = '00';
   getTens.innerHTML = '00';
   tens = 0;
   seconds = 0;
   minutes = 0;
})

function startTimer() {
   tens ++;
   if (tens <= 9) {
      getTens.innerHTML = '0' + tens;
   }
   if (tens > 9) {
      getTens.innerHTML = tens;
   }
   if (tens > 99) {
      seconds ++;
      getSeconds.innerHTML = '0' + seconds;
      tens = 0;
      getTens.innerHTML = '0' + 0;
   }
   if (seconds > 9) {
      getSeconds.innerHTML = seconds;
   }
   if (seconds > 59) {
      minutes ++; 
      seconds = 0;
      getSeconds.innerHTML = '0' + seconds;
      getMinutes.innerHTML = '0' + minutes;
     
   }
   if (minutes > 9) {
      getMinutes.innerHTML = minutes;
   }
}