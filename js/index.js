// Your code goes here

// [1] Changes all h2 elements to red when moused over
    
const goTag = document.querySelectorAll("h2");


goTag.forEach(function(x,i){
x.addEventListener('mouseover', function(){
    goTag[i].style.color = 'red';
});

x.addEventListener('mouseleave', function(){
    goTag[i].style.color = 'black';
});
});

