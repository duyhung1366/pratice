// dom event

// 1. preventDefault (sự kiện mặc định )
// 2. stopPropagation ( sự kiện nổi bọt )


//1 
var aElement = document.querySelector('a');

aElement.onclick = function(e){
    // console.log(e.target.href);
    if(e.target.href.indexOf("https://www.facebook.com/duyhungabcxyz/") >= 0){
        e.preventDefault(); 
    }
}

// 2 

var divNode = document.querySelector('.propagation');

divNode.onclick = function(e){
    console.log('DIV'); 
}

var buttonNode = divNode.querySelector('button');

// buttonNode.onclick = function(e){
//     console.log('click me !!!')
// }

// ở đây khi click vào buttonNode thì vẫn click dính thằng cha 
// nên console vẫn có DIV 
// để loại bỏ hiện tượng nổi bọt này ta dùng như sau 


buttonNode.onclick = function(e){
    e.stopPropagation(); 
    console.log('click me !!!')
}

// đã dừng được 