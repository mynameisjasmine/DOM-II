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
/*eventbutton.addEventListener('mouseenter', function(event){
    event.target.style.color = 'red';
 });  */

//Event Listener 3
window.addEventListener('mousedown', function(event){
 alert('My name is Alana Limage!');
 console.log(event); 
}); 
//Event Listener 4
/*let eventblurb = document.querySelector('destination');
eventblurb.forEach(function(x,i){
 x.addEventListener('mouseenter', function(event){
    eventblurb.style.border.color = 'green';
    });
}) */




//Event Listener 5
let imgChanger = document.querySelector( '.bus-img')
imgChanger.addEventListener('click', function(){
if(img.src === 'img/fun-bus.jpg') {
    img.src === 'img/destination.jpg'
};
});

//Event Listener 6

//Event Listener 7

//Event Listener 8

//Event Listener 9

//Event Listener 10
