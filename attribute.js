
// set , get attributes

var boxNode = document.querySelector('.box'); 

boxNode.title = 'hung'; 
boxNode.setAttribute('contenteditable', 'true')

console.log(boxNode.title)
console.log(boxNode.getAttribute('title'))
console.log(boxNode.getAttribute('contenteditable'))
console.log(typeof boxNode.getAttribute('contenteditable'))

// nếu dùng boxNode. -> chỉ set và get duọc ca attribute hợp lệ
// nếu dùng setAttribute và getAttribute thì có thể set và get được bất cứ attribute nào 

