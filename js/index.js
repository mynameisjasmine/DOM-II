// Your code goes here

// Changes all h2 elements to red when moused over
    
const goTag = document.querySelectorAll("h2");


goTag.forEach(function(x,i){
x.addEventListener('mouseover', function(){
    goTag[i].style.color = 'red';
});

x.addEventListener('mouseleave', function(){
    goTag[i].style.color = 'black';
});
});

const dragImage = document.querySelector(".map");
//console.log('dragImage',dragImage);

// dragImage.addEventListener('dragstart', function(event){
// event.dataTransfer.setData("text", event.target.id)
// })

dragImage.addEventListener('dragend', function dropEvent(event) {
 event.dataTransfer.setDragImage("text", event.target.id)
 event.src = 'img/destination.jpg'
});