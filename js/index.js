// Your code goes here

// #1 Changes the text on all h2 elements to red when moused over
    
const goTag = document.querySelectorAll("h2");


goTag.forEach(function(x,i){
x.addEventListener('mouseover', function(){
    goTag[i].style.color = 'red';
});

x.addEventListener('mouseleave', function(){
    goTag[i].style.color = 'black';
});
});


// #2 Changes the header picture when image is clicked

const updatePicture = document.querySelector("img");

updatePicture.addEventListener('click', event => {
    updatePicture.src = 'https://mk0mexiconewsdam2uje.kinstacdn.com/wp-content/uploads/2019/06/party-bus.jpg';
})


// #3 A popup will alert when any key is pressed

window.addEventListener('keydown', event => {
    alert('You pressed a key!');
})


// #4 A popup will alert when the page loads

window.addEventListener('load', event => {
    alert('Site has loaded!');
})


// #5 Will change the color of the text when a p tag is double clicked

let dbl = document.querySelectorAll("p");

dbl.forEach(items => {
    items.addEventListener('dblclick', event => {
        items.style.color = "green";
    })
})

// #6 Gives an alert when the window is resized

window.addEventListener('resize', event => {
    alert('Do not resize the window');
})



//#7 Changes the image when image is dragged 

let dragged = document.querySelector(".img-fluid");

dragged.addEventListener('drag', event => {
    dragged.src = "https://cdn.citywonders.com/media/19472/new-project-6-min.jpg?anchor=center&mode=crop&width=960&height=640&rnd=132103422980000000"
})


// #8 Changes the body color when wheeling / scrolling

let wheel = document.querySelector("body");

wheel.addEventListener('wheel', event => {
    wheel.style.backgroundColor = "pink";
})


// #9 Name input background changes to purple when field is clicked in

let email = document.querySelector('input[type="text"]');

email.addEventListener('focus', event => {
 email.style.background = "purple";
})



// #10 Added prevent default to submit button

let noSubmit = document.querySelector('input[type="submit"]')

noSubmit.addEventListener('click', event => {
   alert('This button is not working') 
   event.preventDefault();
})

