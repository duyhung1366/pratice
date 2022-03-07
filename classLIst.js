// classList property 

// add
// contains
// remove 
// toggle 

var boxNode = document.querySelector('.box'); 

console.log(boxNode.classList); 
console.log(boxNode.classList.value); 

// add : them class 

boxNode.classList.add('red')
boxNode.classList.contains('red') // kiem tra class 
boxNode.classList.remove('red') // xoa class
boxNode.classList.toggle('red') // neu co thi xoa ko co thi them