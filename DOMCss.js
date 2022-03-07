// style cho element 

var boxNode = document.querySelector('.box');

console.log(boxNode.style)

// viết theo kiểu lạc đà : chữ đầu viết thường từ chứ phía sau sẽ viết hoa chữ cái đầu 
// ví dụ : backgroundPosition

// boxNode.style.backgroundColor = 'pink';
// boxNode.style.width = '500px';

// cách viết được nhiều style 1 lúc 

Object.assign(boxNode.style, {
    backgroundColor : 'pink',
    width : '500px'
})

// đây là cách tạo ra css inline chứ không phải internal và external
