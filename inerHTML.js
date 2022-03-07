// thêm 1 element vào trong 1 element trong DOM

var boxNode = document.querySelector('.box');

// boxNode.innerHTML ='<h1>new text</h1>';
// -> thêm vào và xóa tất cả các element bên trong

var childBoxNode = boxNode.querySelector('h2:nth-child(2)');
childBoxNode.innerHTML = '<p>new text</p>';

// khi thêm element vào bằng innerHtml ta có thể sử dụng nó như 1 element bình thường 

// ta có thể thêm cả attribute và text vào bằng innerHtml

boxNode.innerHTML = '<p style = "color: red; font-size: 24px">text Node</p>';

// outerHTMLL : lấy từ element đang get đến 

console.log(boxNode.outerHTML)

boxNode.outerHTML = '<p>outerHTML</p>' 
// thêm vào xóa các element từ element đang get 
// tuy nhiên khi console lại boxNode thì biến vẫn được lưu trong bộ nhớ nên
// vần được get ra nhưng thực tế thì ko còn node nữa 



