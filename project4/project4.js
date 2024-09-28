 // for buttons
const startdtopbtn=document.querySelector('#startstopbtn');

const resetbtn=document.querySelector('#resetbtn');
//time values
let second = 0;
let minutes = 0;
let hours = 0;

//leading zero
 let leadingseconds = 0;
 let leadingminutes = 0;
 let leadinghours = 0;
//set interval and timestatus
let timeInterval = null;
let timeStatus = 'stoped';

// function stopwatch
 function stopWatch() {
   second++
   if(second / 60 ===1){
    second = 0;
    minutes++;

    if(minutes / 60 ===1){
        minutes = 0;
        hours++;
       }
   }
    

   if(second < 10){
    leadingseconds = "0" + second.toString();
   } else {
    leadingseconds = second;
   }


   if(minutes < 10){
    leadingminutes = "0" + minutes.toString();
   } else {
    leadingminutes = minutes;
   }



   if(hours < 10){
    leadinghours = "0" + hours.toString();
   } else {
    leadinghours = hours;
   }
 // display 
   let displayTime = document.getElementById('timer').innerText = leadinghours + ":" +leadingminutes+":"+ leadingseconds;

   
 }

 startdtopbtn.addEventListener('click', function(){
    
  if(timeStatus === "stopped"){
    timeInterval = window.setInterval(stopWatch, 1000);
    document.getElementById('startstopbtn').innerHTML ='<i class="fa-solid fa-pause" id="pause"></i>';
    timeStatus = 'stopped';
  
  } else {
     window.clearInterval(timeInterval);
    document.getElementById('startstopbtn').innerHTML ='<i class="fa-solid fa-arrow-rotate-left" id="play"></i>';
    timeStatus = 'stopped';
  }
 });

  


 

  resetbtn.addEventListener('click',function(){

  window.clearInterval(timeInterval);
  second = 0;
  minutes = 0;
   hours = 0;

   document.getElementById('timer').innerHTML = "00:00:00";
});