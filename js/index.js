// Your code goes here


//Event Listener 1
let eventnav = document.querySelector('nav');
eventnav.addEventListener('mouseover', function(event){
   event.target.style.color = 'blue';

});



//Event Listener 2
let eventbutton = document.querySelectorAll('.btn');
console.log(eventbutton)
eventbutton.forEach(function(x,i){
 x.addEventListener('mouseover', function(){
    eventbutton[i].style.color = 'red';
});
x.addEventListener('mouseleave', function(){
    eventbutton[i].style.color = 'white';
});
});
  

//Event Listener 3

window.onload = function prepareEventHandlers() {
 alert('Welcome to Fun Bus!');
};
/*window.addEventListener('mousedown', function(event){
 alert('This is Fun Bus!');
 console.log(event); 
});  */


//Event Listener 4
/*let eventblurb = document.querySelector('destination');
eventblurb.forEach(function(x,i){
 x.addEventListener('mouseenter', function(event){
    eventblurb.style.border.color = 'green';
    });
}) */




//Event Listener 5
let imgChanger = document.querySelector(' .home .intro img')
console.log(imgChanger);

//let image = document.querySelector('img')
imgChanger.addEventListener('click', function(){
    imgChanger.src = 'img/destination.jpg'
});

//Event Listener 6

//Event Listener 7

//Event Listener 8

//Event Listener 9

//Event Listener 10
