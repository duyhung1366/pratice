// innerText vs TextContent property 

var boxNode = document.querySelector('.box'); 

console.log(boxNode.innerText) // -> in ra những gì hiển thị trên web 
console.log(boxNode.textContent) // -> in ra những gì hiển thi trong file html ( kể cả trên màn hình web ko có)

boxNode.innerText = 'hung';   // -> chỉnh sửa nội dung của element và xóa hết nội dung cũ
boxNode.textContent = 'hung'; 

