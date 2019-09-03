// Your code goes here

// #1 Changes all h2 elements to red when moused over
    
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
    alert('Welcome to our website!');
})

// #4

// #5

// #6

//#7

// #8

// #9

// #10

